export default function Content() {
    let text;
    const handleInput = (e) => {
        e.preventDefault();
        text = e.target[0].value;
        document.querySelector('.display_zone').innerText = text;
        document.querySelector('.text-area').value = "";
    };

    return (
        <div>
            <form onSubmit={(e) => { handleInput(e) }}>
                <div className="btn-text-container">
                    <textarea className="text-area" placeholder="Add text here" cols="30" rows="10"></textarea>
                    <button >Display</button>
                </div>
            </form>
            <div className="display_zone">

            </div>
        </div>
    );
}