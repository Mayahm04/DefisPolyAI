export default function History({ history }) {
  if (!history || history.length === 0)
    return <p className="text-gray-500 text-center">Aucun historique.</p>;

  return (
    <div className="p-6 bg-white shadow rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Historique des prédictions</h2>

      <ul>
        {history.map((item) => (
          <li
            key={item.id}
            className="border-b py-2 flex justify-between text-sm"
          >
            <span className="font-medium capitalize">{item.output}</span>
            <span className="text-gray-500">
              {item.type} — {new Date(item.timestamp).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
