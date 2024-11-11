import {Button, Select, SelectItem} from "@nextui-org/react";

export const genre = [
    {key: "Action", label: "Action"},
    {key: "Honor", label: "Honor"},

];

export const gametypes = [
    {key: 'Single Player', label: "Single Player"},
    {key: 'Multi Player', label: "Multi Player"},
    {key:'Online Co-op', label:'Online Co-op'}
]

export const mystuff = [
    {key: 'Epic Games', label: "Epic Games"},
    {key: 'EA Games', label: "EA Games"},
]

export const sortBy = [
    {key: 'Title A-Z', label: "Title A-Z"},
]

function Library() {

    return(
        <div className="p-[3rem] h-[100vh]">
            <h1 className='text-white text-[3rem] font-extralight'>Library</h1>
            <div className="flex flex-col gap-6 ">
                <Select
                    label="Genre"
                    className="max-w-xs"
                >
                    {genre.map((genre) => (
                        <SelectItem key={genre.key}>
                            {genre.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Game Type"
                    className="max-w-xs"
                >
                    {gametypes.map((gametypes) => (
                        <SelectItem key={gametypes.key}>
                            {gametypes.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="My Stuffs"
                    className="max-w-xs"
                >
                    {mystuff.map((mystuff) => (
                        <SelectItem key={mystuff.key}>
                            {mystuff.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Sort by"
                    className="max-w-xs"
                >
                    {sortBy.map((sortBy) => (
                        <SelectItem key={sortBy.key}>
                            {sortBy.label}
                        </SelectItem>
                    ))}
                </Select>

            </div>
                <Button className='px-[4rem] bg-gray-600 rounded-lg mt-[2rem] text-[1rem] border-1  text-white py-[1.5rem]'>Research</Button>
        </div>
    )
}

export default Library;