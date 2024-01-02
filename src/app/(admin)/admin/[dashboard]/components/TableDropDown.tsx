"use client";
import { MoreHorizontal } from "lucide-react";
import axios from "axios";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MyDropDown = ({ entity, id }: { entity: string; id: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const deleteItem = await axios.post("/api/admin/delete/", { id, entity });
      toast.success("تم حذف العنصر");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <p className="text-[#F9C500]">Actions</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            className="w-full text-center"
            href={{ pathname: `edit/${entity}`, query: { id } }}
          >
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button
          variant={"destructive"}
          className="w-full"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropDown;
