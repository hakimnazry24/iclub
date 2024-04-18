"use client";

import { useRef, useState } from "react";
import ProposalSteps from "@/app/club/[clubId]/program/[programId]/proposal/proposalSteps";

export default function ProposalTab(){
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);
    function handleChange(e) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files?.[0]) {
            console.log(e.target.files);
            for (let i = 0; i < e.target.files["length"]; i++) {
                setFiles((prevState) => [...prevState, e.target.files[i]]);
            }
        }
    }

    function handleSubmitFile(e) {
        if (files.length === 0) {
            // no file has been submitted
        } else {
            // write submit logic here
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files?.[0]) {
            for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
                setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
            }
        }
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function removeFile(fileName, idx) {
        const newArr = [...files];
        newArr.splice(idx, 1);
        setFiles([]);
        setFiles(newArr);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }
    return (
        <>
            <section className={'flex'}>
                <ProposalSteps  />
            </section>
            <section className={'flex justify-center'}>
                <form
                    onDragEnter={handleDragEnter}
                    onSubmit={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    className='card shadow-md border border-indigo-200 p-5 mx-3 my-5 w-1/3 min-h-[10rem] text-center bg-indigo-100'>
                    {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
                    <input
                        placeholder="fileInput"
                        className="hidden"
                        ref={inputRef}
                        type="file"
                        multiple={true}
                        onChange={handleChange}
                        accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                    />

                    <p>
                        Drag & Drop files or{" "}
                        <span
                            className="font-bold text-blue-600 cursor-pointer"
                            onClick={openFileExplorer}
                        >
            <u>Select files</u>
          </span>{" "} to upload
                    </p>

                    <div className="flex flex-col items-center p-3">
                        {files.map((file, idx) => (
                            <div key={idx} className="flex flex-row space-x-5">
                                <span>{file.name}</span>
                                <span
                                    className="text-red-500 cursor-pointer"
                                    onClick={() => removeFile(file.name, idx)}>remove
                                </span>
                            </div>
                        ))}
                    </div>
                        <button
                            type='submit'
                            className=" btn  w-auto"
                            onClick={handleSubmitFile}
                        >
                            <span className="">Submit</span>
                        </button>

                </form>
            </section>

        </>
    )
}