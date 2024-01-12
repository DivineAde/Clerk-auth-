import { FaSort } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Students, invoices } from "@/routes";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { PiTrashSimpleLight } from "react-icons/pi";


type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className=" flex justify-between items-center px-4 py-2">
        <h1 className=" font-bold capitalize text-2xl">Student list</h1>

        <div className="flex items-center gap-4">
          <FaSort className="text-[#FEAF00] w-5 h-5" />
          <button className=" bg-[#FEAF00] text-white uppercase px-3 py-2 rounded-md">
            Add new Students
          </button>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nationality</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="">Email id</TableHead>
            <TableHead className="">Date of Admission</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Students.map((student) => (
            <TableRow key={student.Name}>
              <TableCell className="font-medium">
                <Image src="/Flag-Nigeria.webp" width="65" height="55" alt="nigeria" />              
                </TableCell>
              <TableCell className="font-medium">{student.Name}</TableCell>
              <TableCell>{student.Email}</TableCell>
              <TableCell>{student.Phone}</TableCell>
              <TableCell className="">
                {student.Email_number}
              </TableCell>
              <TableCell className="">
                {student.Date_of_admission}
              </TableCell>
              <TableCell className="">
                <CiEdit className="w-7 h-7 text-[#FEAF00]" />
              </TableCell>
              <TableCell className="">
                <PiTrashSimpleLight className="w-7 h-7 text-[#FEAF00]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
           
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default page;
