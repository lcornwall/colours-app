const links = [
    { name: 'Age 3-4', href: '/dashboard' },
    {
        name: 'Age 4-5',
        href: '/dashboard',
    },
    {
        name: 'Age 5-6',
        href: '/dashboard',
    },
    {
        name: 'Age 6-7',
        href: '/dashboard',
    },
    {
        name: 'Age 7-8',
        href: '/dashboard',
    },
];



export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </a>
                );
            })}
        </>
    );
}
