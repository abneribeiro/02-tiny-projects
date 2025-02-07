const editor = document.getElementById('editor');
const linkSuggestions = document.getElementById('link-suggestions');

// Basic formatting buttons
document.getElementById('bold').addEventListener('click', () => execCommand('bold'));
document.getElementById('italic').addEventListener('click', () => execCommand('italic'));
document.getElementById('underline').addEventListener('click', () => execCommand('underline'));

function execCommand(command) {
    document.execCommand(command, false, null);
}

// Link creation logic
let pages = ['Home', 'About', 'Contact']; // Simulated pages
let isTypingLink = false;
let linkStart = 0;

editor.addEventListener('input', handleInput);
editor.addEventListener('keydown', handleKeyDown);

function handleInput(e) {
    const text = editor.innerText;
    if (text.slice(-2) === '[[' && !isTypingLink) {
        isTypingLink = true;
        linkStart = text.length - 2;
        showLinkSuggestions('');
    } else if (isTypingLink) {
        const linkText = text.slice(linkStart + 2);
        showLinkSuggestions(linkText);
    }
}

function handleKeyDown(e) {
    if (e.key === 'Enter' && isTypingLink) {
        e.preventDefault();
        const firstSuggestion = linkSuggestions.firstChild;
        if (firstSuggestion) {
            insertLink(firstSuggestion.textContent);
        }
    } else if (e.key === 'Escape' && isTypingLink) {
        hideLinkSuggestions();
    }
}

function showLinkSuggestions(search) {
    const filteredPages = pages.filter(page => 
        page.toLowerCase().includes(search.toLowerCase())
    );
    
    linkSuggestions.innerHTML = '';
    filteredPages.forEach(page => {
        const div = document.createElement('div');
        div.textContent = page;
        div.className = 'suggestion';
        div.addEventListener('click', () => insertLink(page));
        linkSuggestions.appendChild(div);
    });

    if (filteredPages.length > 0) {
        const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
        linkSuggestions.style.top = `${rect.bottom + window.scrollY}px`;
        linkSuggestions.style.left = `${rect.left}px`;
        linkSuggestions.style.display = 'block';
    } else {
        hideLinkSuggestions();
    }
}

function hideLinkSuggestions() {
    linkSuggestions.style.display = 'none';
    isTypingLink = false;
}

function insertLink(page) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.setStart(range.startContainer, linkStart);
    range.deleteContents();

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = page;
    range.insertNode(link);

    // Move cursor to end of link
    range.setStartAfter(link);
    range.setEndAfter(link);
    selection.removeAllRanges();
    selection.addRange(range);

    hideLinkSuggestions();
}