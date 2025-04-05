function analyzeText() {
    // Get the text from textarea
    let text = document.getElementById("text-input").value;
  
    // Count words (split by spaces and filter out empty strings)
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
  
    // Count characters with spaces
    let charWithSpace = text.length;
  
    // Count characters without spaces
    let charWithoutSpace = text.replace(/\s/g, "").length;
  
    // Count sentences (split by . ! ?)
    let sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
    // Count paragraphs (split by double new lines)
    let paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
  
    // Display results in HTML
    document.getElementById("word-count").textContent = words.length;
    document.getElementById("char-with-space").textContent = charWithSpace;
    document.getElementById("char-without-space").textContent = charWithoutSpace;
    document.getElementById("sentence-count").textContent = sentences.length;
    document.getElementById("paragraph-count").textContent = paragraphs.length;
  }
  