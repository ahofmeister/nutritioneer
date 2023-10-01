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
    return <Link href={href} className={'hover:text-pastel-green-300 mx-5'}>
        {label}
    </Link>;
}

interface User {
    email?: string | undefined
}

const Navbar = () => {
    const supabase = createClientComponentClient();

    const [user, setUser] = useState<User>()

    async function getUser() {
        const {
            data
        } = await supabase.auth.getUser()

        if (data && data.user) {
            setUser(data.user)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return <nav className="sticky top-0 border-b border-b-gray">
        <div className="grid grid-cols-2 p-4">
            <div className={""}>
                <NavbarLink href={'/'} label={'Home'}/>
                {user &&
                    <NavbarLink href={'/foods'} label={'Foods'}/>
                }
            </div>
            <div className={'justify-self-end'}>
                {user &&
                    (
                        <div className={"flex flex-row gap-20"}>
                            {user.email}
                            <LogoutButton/>
                        </div>

                    )
                }
            </div>
        </div>
    </nav>
};

export default Navbar
