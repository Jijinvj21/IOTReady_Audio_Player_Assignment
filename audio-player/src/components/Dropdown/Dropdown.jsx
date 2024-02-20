import "./Dropdown.scss"
const items = [
  {
    key: '1',
    label: '1st menu item',
    link: 'https://www.antgroup.com'
  },
  {
    key: '2',
    label: '2nd menu item',
    link: 'https://www.aliyun.com'
  },
  {
    key: '3',
    label: '3rd menu item',
    link: 'https://www.luohanacademy.com'
  },
];

const App = () => {
  const handleItemClick = (link) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          {items.map(item => (
            <a key={item.key} href={item.link} target="_blank" rel="noopener noreferrer" onClick={() => handleItemClick(item.link)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
