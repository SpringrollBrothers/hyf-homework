import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import fs from "fs";

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
app.get("/search", (req, res) => {
  const query = req.query.q;

  // Read the documents.json file
  fs.readFile("documents.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading documents file.");
    }

    // Parse the data to JSON
    const documents = JSON.parse(data);

    // If no query is provided, return all documents
    if (!query) {
      return res.json(documents);
    }

    // Filter documents based on the query
    const filteredDocuments = documents.filter((doc) =>
      Object.values(doc).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );

    // Return the filtered documents
    res.json(filteredDocuments);
  });
});

app.get("/documents/:id", (req, res) => {
  const documentId = parseInt(req.params.id, 10); // Convert the id to a number

  // Read the documents.json file
  fs.readFile("documents.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading documents file.");
    }

    const documents = JSON.parse(data);

    const document = documents.find((doc) => doc.id === documentId);

    if (!document) {
      return res.status(404).send("Document not found.");
    }

    res.json(document);
  });
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  // Check if both query and fields are provided
  if (query && fields) {
    return res
      .status(400)
      .send(
        "You can't provide both 'q' (query) and 'fields' at the same time."
      );
  }

  // Read the documents.json file
  fs.readFile("documents.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading documents file.");
    }

    // Parse the data to JSON
    const documents = JSON.parse(data);

    // Handle query-based search (same as GET /search)
    if (query) {
      const filteredDocuments = documents.filter((doc) =>
        Object.values(doc).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(query.toLowerCase())
        )
      );
      return res.json(filteredDocuments);
    }

    // Handle field-based search
    if (fields) {
      const filteredDocuments = documents.filter((doc) =>
        Object.keys(fields).every(
          (field) => doc[field] && doc[field] === fields[field]
        )
      );
      return res.json(filteredDocuments);
    }

    // If neither query nor fields are provided, return all documents
    res.json(documents);
  });
});
