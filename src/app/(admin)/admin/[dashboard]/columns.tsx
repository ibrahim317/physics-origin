import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Course = {
	id: string;
	price: number;
	NumberOfSections: number;
};

export const columns: ColumnDef<Course>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "price",
		header: "Price",
	},
	{
		accessorKey: "NumberOfSections",
		header: "Number of sections",
	},
];
