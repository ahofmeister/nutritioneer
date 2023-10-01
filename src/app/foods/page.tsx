import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export default async function FoodPage() {

    const supabase = createServerComponentClient({cookies})

    const {data} = await supabase.from("foods").select("*")

    return (
        <>
            {data?.map(food => <div key={food.id}>{food.name}</div>)}
        </>
    )
}
