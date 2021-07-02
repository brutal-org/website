export default function Home() {
    return (
        <div className="self-center max-w-prose pt-16 pb-16 flex flex-col gap-8 flex-grow">
            <img className="w-32 place-self-left" src="assets/logo.png" />

            <div className="text-4xl">
                The Brutal Operating System
            </div>


            <div className="text-xl font-normal text-gray-700">
                Striking modernist shapes and bold use of modern C are the hallmarks of BRUTAL.
                BRUTAL combines the desire of UNIX utopia from the 1970s with modern technology and engineering.
            </div>

            <a className="p-2 text-lg text-center bg-black text-white uppercase w-72 rounded" href="https://github.com/brutal-org/brutal">
                Contribute on GitHub
            </a>
        </div>
    );
}
