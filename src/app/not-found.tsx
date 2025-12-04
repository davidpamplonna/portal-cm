import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-blue-600 drop-shadow-lg">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Página não encontrada
      </h2>

      <p className="mt-2 max-w-md text-center text-gray-600">
        A página que você está tentando acessar não existe ou foi removida.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}
