const AgentDashboard = () => {
  const [pendingProps, setPendingProps] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('listings')) || [];
    setPendingProps(all.filter(prop => prop.status === 'pending'));
  }, []);

  const approveListing = (id) => {
    const all = JSON.parse(localStorage.getItem('listings')) || [];
    const updated = all.map(prop => prop.id === id ? { ...prop, status: 'approved' } : prop);
    localStorage.setItem('listings', JSON.stringify(updated));
    setPendingProps(updated.filter(p => p.status === 'pending'));
  };

  return (
    <div className="pt-20 px-4">
      <h2 className="text-2xl font-bold mb-6">Pending Listings</h2>
      {pendingProps.map((prop) => (
        <div key={prop.id} className="bg-white p-4 rounded shadow mb-4">
          <p className="font-semibold">{prop.title}</p>
          <button
            onClick={() => approveListing(prop.id)}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};
