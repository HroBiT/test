export default function Home() {
    return (
        <div className="flex justify-center h-screen">
            <div className="flex flex-row items-center space-x-4">
                <h1 className="font-bold text-lg">Home Page</h1>
                <p className="text-base">Welcome to the home page!</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
            </div>
        </div>
    );
};