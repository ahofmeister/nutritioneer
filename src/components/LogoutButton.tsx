export default function LogoutButton() {
    return (
        <form action="/auth/sign-out" method="post">
            <button className="hover:text-pastel-green-300 block">
                Logout
            </button>
        </form>
    )
}
