    const [newNote, setNewNote] = useState({
        title: ''
    });

    handleChanges = e => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value,
        });
        console.log(newNote);
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     addNote(newNote);
    //     setNewNote({
    //         title: ''
    //     });
    // }

    // Star Wars

    // App.js
    const [search, setSearch] = useState('');
    const updateSearch = (event) => {
        setSearch(event.target.value);
     }

     // List
     const [characters, setCharacters] = useState([]);
     let filteredCharacters = characters.filter( (character) => {
        return character.name.indexOf(props.search) !== -1;
    })