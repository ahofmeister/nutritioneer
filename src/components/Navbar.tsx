'use client'
import Link from 'next/link'
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useEffect, useState} from "react";
import LogoutButton from "@/src/components/LogoutButton";
import {Route} from "next";

const NavbarLink = function <T extends string>({href, label}: {
    href: Route<T> | URL,
    label: String
}) {
    return <Link href={href}
                 className={'hover:text-pastel-green-300 mx-5'}>
        {label}
    </Link>;
}

const Navbar = () => {
    const supabase = createClientComponentClient();

    const [data, setData] = useState()

    async function getProfile() {

        const {
            data
        } = await supabase.auth.getUser()

        if (data) {
            // @ts-ignore
            setData(data)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return <nav className="sticky top-0 border-b border-b-gray">
        <div className="grid grid-cols-2 p-4">
            <div className={""}>
                <NavbarLink href={'/'} label={'Home'}/>
                {data?.user &&
                    <NavbarLink href={'/foods'} label={'Foods'}/>
                }
            </div>
            <div className={'justify-self-end'}>
                {data?.user &&
                    (
                        <div className={"flex flex-row gap-20"}>
                            {data.user.email}
                            <LogoutButton/>
                        </div>

                    )
                }
            </div>
        </div>
    </nav>
};

export default Navbar
