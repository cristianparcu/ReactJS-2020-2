import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import News from "./components/News";

export default class App extends Component {
    constructor() {
        super();
        this.state = { news: [] };
    }

    componentDidMount() {
        axios.get("./news.json").then((res) => {
            console.log(res.data);
            const currentNews = res.data;
            this.setState({ news: currentNews });
        });
    }

    render() {
        return (
            <div>
                <header className="App-header">News!</header>
                {this.state.news.map((i) => {
                    return (
                        <News
                            key={i.id}
                            author={i.author}
                            body={i.body}
                            title={i.title}
                        />
                    );
                })}
            </div>
        );
    }
}
