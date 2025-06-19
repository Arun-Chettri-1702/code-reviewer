import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

function App() {
    const [code, setCode] = useState(`function sum() {return 1+1}`);
    const [review, setReview] = useState(``);

    async function reviewCode() {
        const response = await axios.post(
            "http://127.0.0.1:8000/ai/get-review",
            {
                code,
            }
        );
        setReview(response.data);
    }

    return (
        <>
            <main className="h-full w-full p-5 flex gap-4 ">
                <div className="left-code-part relative h-full basis-2/5 bg-black rounded-xl ">
                    <div className="code h-full w-full mx-0 my-0 rounded-[0.7rem]">
                        <Editor
                            value={code}
                            onValueChange={(code) => setCode(code)}
                            highlight={(code) =>
                                Prism.highlight(
                                    code,
                                    Prism.languages.javascript ||
                                        Prism.languages.js,
                                    "javascript"
                                )
                            }
                            padding={10}
                            className="h-full w-full font-mono text-[16px] border border-solid border-b-cyan-50 rounded-xl"
                            style={{
                                fontFamily:
                                    '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                                backgroundColor: "transparent",
                            }}
                        />
                    </div>
                    <button
                        className="review absolute bottom-4 right-4 !bg-purple-400 py-1 px-3 rounded-md font-medium hover:cursor-pointer"
                        onClick={reviewCode}
                    >
                        Review
                    </button>
                </div>
                <div className="right-code-review h-full basis-3/5 bg-gray-900 rounded-xl py-4 px-8 overflow-auto">
                    <Markdown rehypePlugins={[rehypeHighlight]}>
                        {review}
                    </Markdown>
                </div>
            </main>
        </>
    );
}

export default App;
