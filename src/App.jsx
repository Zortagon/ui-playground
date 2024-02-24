import React from "react";

import { RemoveScroll } from "react-remove-scroll";
import { cn, generateHash } from "./lib/utils";
import NavBar from "./components/ui/NavBar";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import ButtonTab from "./components/ui/ButtonTab";
import SectionContainer from "./components/container/SectionContainer";
import IconClipBoard from "./components/Icon/IconClipBoard";

const App = () => {
    const [currentForm, setCurrentForm] = React.useState("encode");
    const [encodeData, setEncodeData] = React.useState(null);

    const [error, setError] = React.useState(null);

    const formEncodeRef = React.useRef(null);
    const formDecodeRef = React.useRef(null);

    const handleSubmitEncode = (event) => {
        event.preventDefault();
        setError(null);

        const formData = new FormData(event.target);
        const acquisitionChannel = formData.getAll("acquisition");

        const data = Object.fromEntries(formData.entries());
        data.acquisition = acquisitionChannel;

        if (data.deliv_id.trim() === "") {
            setEncodeData(null);
            setError("'deliv_id' field must not be empty!");
        }

        if (data.updated_date.trim() === "") {
            setEncodeData(null);
            setError("'updated_date' field must be a number!");
        }

        if (!parseInt(data.status)) {
            setEncodeData(null);
            setError("'status' field must be a number!");
        }

        if (!error) {
            setEncodeData(() => {
                const newData = {
                    deliv_id: data.deliv_id,
                    updated_date: data.updated_date,
                    status: data.status,
                };
                return { ...newData, encodedString: generateHash(newData) };
            });
        }
    };

    const handleSubmitDecode = (event) => {
        event.preventDefault();
    };

    return (
        <main>
            <SectionContainer className="mt-20">
                <menu className="mb-5 flex gap-2 rounded-md border border-slate-200 bg-slate-100 px-2 py-1.5">
                    <ButtonTab
                        text="Encode"
                        onSelect={() => setCurrentForm("encode")}
                        active={currentForm == "encode"}
                    />
                    <ButtonTab
                        text="Decode"
                        onSelect={() => setCurrentForm("decode")}
                        active={currentForm == "decode"}
                    />
                </menu>
                <form
                    ref={formEncodeRef}
                    onSubmit={handleSubmitEncode}
                    className={cn("flex flex-col gap-2.5", {
                        ["hidden"]: currentForm !== "encode",
                    })}
                >
                    <Input
                        name="deliv_id"
                        placeholder="deliv_id"
                        typeData="string"
                    />
                    <Input
                        name="updated_date"
                        placeholder="updated_date"
                        typeData="string"
                    />
                    <Input name="status" placeholder="status" typeData="int" />
                    <Button text="Encode" variant="encode" className="mt-2.5" />
                    {error && (
                        <span className="mt-1.5 rounded-md border border-red-200 bg-red-100 px-2 py-1.5 text-sm text-red-500">
                            <span className="font-medium">Invalid:</span>{" "}
                            {error}
                        </span>
                    )}
                </form>
                <form
                    ref={formDecodeRef}
                    onSubmit={handleSubmitDecode}
                    className={cn("flex flex-col gap-2.5", {
                        ["hidden"]: currentForm !== "decode",
                    })}
                >
                    <Input
                        name="encoded_content"
                        placeholder="Encoded Content"
                    />
                    <Button text="Decode" variant="decode" className="mt-2.5" />
                </form>
            </SectionContainer>
            {currentForm === "encode" ? (
                <>
                    {encodeData && (
                        <>
                            <SectionContainer className="mt-10">
                                <div className="mb-2.5 text-sm font-semibold uppercase tracking-wider">
                                    Encoded String
                                </div>
                                <div className="flex gap-2.5">
                                    <div className="scrollbar-hide overflow-x-scroll border border-slate-200 bg-yellow-100/50 px-2.5 py-0.5">
                                        <span className="break-words font-mono text-sm">
                                            {encodeData.encodedString}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-16 text-slate-400 transition hover:text-slate-700"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                encodeData.encodedString,
                                            );
                                        }}
                                    >
                                        <IconClipBoard />
                                    </button>
                                </div>
                                <div className="mb-2.5 mt-5 text-sm font-semibold uppercase tracking-wider">
                                    JSON Format
                                </div>
                                <div className="flex gap-2.5">
                                    <div className="scrollbar-hide overflow-x-scroll border border-slate-200 bg-yellow-100/50 px-2.5 py-0.5">
                                        <span className="break-words font-mono text-sm">
                                            {`{"datas": "${encodeData.encodedString}"}`}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-16 text-slate-400 transition hover:text-slate-700"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                `{"datas": "${encodeData.encodedString}"}`,
                                            );
                                        }}
                                    >
                                        <IconClipBoard />
                                    </button>
                                </div>
                            </SectionContainer>
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
        </main>
    );
};

App.propTypes = {};

export default App;
