export default function CompareView({ original, improved }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="border rounded overflow-hidden">
        <h2 className="font-bold text-xl mb-2 p-2 bg-gray-100">🌐 Original Site</h2>
        <iframe
          srcDoc={original}
          title="Original Site"
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-[85vh] border-0"
        />

      </div>
      <div className="border rounded overflow-hidden">
        <h2 className="font-bold text-xl mb-2 p-2 bg-green-100">✨ Improved Site</h2>
        <iframe
          srcDoc={improved}
          title="Improved Site"
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-[85vh] border-0"
        />


      </div>
    </div>
  )
}
