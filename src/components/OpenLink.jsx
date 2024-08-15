const Openlink =({ title, url}) => {
    return (
        <>
            <a
              className="App-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
        </>
    );
};

export default Openlink;