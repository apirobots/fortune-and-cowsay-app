import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="flex gap-4">
            <Link href="/" className="px-4 py-2 hover:text-blue-600">Fortune</Link>
            <Link href="/cowsay" className="px-4 py-2 hover:text-blue-600">Cowsay</Link>
            <Link href="/random-cow" className="px-4 py-2 hover:text-blue-600">Random &quot;Cow&quot;</Link>
        </nav>
    );
}