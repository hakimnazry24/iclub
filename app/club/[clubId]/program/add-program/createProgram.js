'use server'
import {useProgramService} from "@/app/Services/ProgramService";

export async function addNewProgram(formdata) {
    const programService = useProgramService();

    const { name,  description, dateStart, dateEnd, location } = Object.fromEntries(formdata);

    const program  = {
        name,
        description,
        dateStart,
        dateEnd,
        location
    }
    await programService.createProgram(program);
    console.log("SUCCESS")

}