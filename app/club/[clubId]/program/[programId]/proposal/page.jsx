"use client";

import { useRef, useState } from "react";
import { FaCloudUploadAlt,FaTrashAlt} from "react-icons/fa";
import ProposalSteps from "@/app/club/[clubId]/program/[programId]/proposal/proposalSteps";

const FileSvgDraw = () => {
    return (
        <>
            <svg
                className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
            </svg>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                &nbsp; or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
            </p>
        </>
    );
};

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
            <section className={'flex flex-col items-center justify-center'}>
                <form
                    onDragEnter={handleDragEnter}
                    onSubmit={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onClick={openFileExplorer}
                    className='flex flex-col items-center  card  border-[0.2rem] border-dashed border-indigo-200 p-5 mx-3 my-5 w-1/3 min-h-[10rem] text-center bg-indigo-50 cursor-pointer transition-colors duration-300 hover:bg-indigo-200'>
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
                    <FileSvgDraw />


                </form>

                <div className="max-w-2xl flex flex-col items-center p-3 gap-2.5">
                    {files.map((file, idx) => (
                        <div key={idx} className=" w-full justify-between bg-indigo-50 p-2 items-center rounded-md flex flex-row gap-5">
                            <div className={'truncate '}>
                                <span >{file.name}</span>

                            </div>
                            <div>
                                <FaTrashAlt className="  w-12  text-red-500 cursor-pointer"
                                            onClick={() => removeFile(file.name, idx)}/>
                            </div>

                        </div>
                    ))}
                </div>
                <button
                    type='submit'
                    className="mx-auto btn  w-auto"
                    onClick={handleSubmitFile}
                >
                    <span className="">Submit</span>
                </button>
            </section>

        </>
    )
}