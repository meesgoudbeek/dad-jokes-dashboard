import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-center drop-shadow-md">
            Dad Jokes Dashboard
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-xl">
            Welcome to the Dad Jokes Dashboard! Here you can enjoy the funniest
            and freshest dad jokes every day.
          </p>
          {children}
        </div>
      </body>
    </html>
  );
}
