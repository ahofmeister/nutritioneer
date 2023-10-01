import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {formatDate} from "@/src/components/DateFormatter";


export default async function FoodPage() {

    const supabase = createServerComponentClient({cookies})

    const {data} = await supabase.from("foods").select("*")

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b font-medium border-gray">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Created At</th>
                                    <th scope="col" className="px-6 py-4">Energy</th>
                                    <th scope="col" className="px-6 py-4">Protein</th>
                                    <th scope="col" className="px-6 py-4">Fat</th>
                                    <th scope="col" className="px-6 py-4">Carbohydrates</th>
                                </tr>
                                </thead>
                                <tbody className={"divide-y divide-gray text-center"}>
                                {data?.map(food => {
                                    return <tr key={food.id}>
                                        <td>{formatDate(food.created_at)}</td>
                                        <td>{food.name}</td>
                                        <td>{food.energy}</td>
                                        <td>{food.protein}</td>
                                        <td>{food.fat}</td>
                                        <td>{food.carbohydrates}</td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
