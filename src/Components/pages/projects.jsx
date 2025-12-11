import React from 'react'
import './projects.css'

const Projects = () => {
    return (
        <div className="projects-container">
            {/* <h1>My Projects</h1> */}
            <table className="projects-table">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Language, Tools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Project 1</td>
                        <td><a href="https://github.com/linhkhnguyen98/Huffman-Tree" title="Data compression">Data compression</a></td>
                        <td>Python, Jupiter Notebook</td>
                    </tr>
                    <tr>
                        <td>Project 2</td>
                        <td><a href="https://github.com/linhkhnguyen98/TODO-LIST-CRUD-APP" title="To-do List">To-do List</a></td>
                        <td>React JS</td>
                    </tr>
                    <tr>
                        <td>Project 3</td>
                        <td><a href="https://github.com/linhkhnguyen98/Huffman-Tree" title="Data Compression">Data Compression</a></td>
                        <td>C++</td>
                    </tr>
                    <tr>
                        <td>Project 4</td>
                        <td><a href="https://github.com/linhkhnguyen98/Undirected-Graph" title="Undirected Graph Construction">Undirected Graph Construction</a></td>
                        <td>C++</td>
                    </tr>
                    <tr>
                        <td>Project 5</td>
                        <td>Personal Portfolio Website</td>
                        <td>React JS</td>
                    </tr>
                    <tr>
                        <td>Project 6</td>
                        <td><a href="https://github.com/linhkhnguyen98/Recommender-System" title="Video Game Recommender System">Video Game Recommender System</a></td>
                        <td>Python, Jupiter Notebook</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Projects