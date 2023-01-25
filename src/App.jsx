// import Modal from "components/Modal/Modal";
import Modal from "components/Modal/Modal";
import NewsList from "components/NewsList/NewList";
import Wrapper from "components/Wrapper/Wrapper";
import { lsQueryConfigKey } from "constans/api";
import { Component } from "react";

import { BulletList } from "react-content-loader";
import { fetchArticles, getArticles } from "services/HNewsAPI";

export class App extends Component {
  state = {
    articles: [],
    loading: false,
    errorMessage: "",
    query: "",
    hitsPerPage: 10,
    showQueryModal: false,
  };

  componentDidMount() {
    // console.log(response.data.hits);
    const queryConfig =
      JSON.parse(localStorage.getItem(lsQueryConfigKey)) ?? {};
    console.log(queryConfig);
    this.setState(queryConfig);
    this.fetchArticles(queryConfig);
  }

  componentDidUpdate(_, prevState) {
    const { query, hitsPerPage } = this.state;
    localStorage.setItem(
      lsQueryConfigKey,
      JSON.stringify({ query, hitsPerPage })
    );
    if (prevState.query !== query || prevState.hitsPerPage !== hitsPerPage) {
      this.fetchArticles({
        query,
        hitsPerPage,
      });
    }
  }

  fetchArticles = async ({ query, hitsPerPage }) => {
    // console.log(query);
    try {
      this.setState({ loading: true, errorMessage: "", searchQuery: query });
      // const articles = await getArticles({ query, hitsPerPage });
      const articles = await fetchArticles({ query, hitsPerPage });
      this.setState({ articles });
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  changeValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  refetchArticles = () => {
    const { query, hitsPerPage } = this.state;
    this.fetchArticles({ query, hitsPerPage });
  };

  openSearchModal = () => this.setState({ showQueryModal: true });
  closeSearchModal = () => this.setState({ showQueryModal: false });

  render() {
    const {
      articles,
      loading,
      errorMessage,
      query,
      hitsPerPage,
      showQueryModal,
    } = this.state;
    return (
      <Wrapper>
        <button onClick={this.openSearchModal}>Open Search Modal</button>
        {loading && (
          <h3>
            <BulletList />
          </h3>
        )}
        {errorMessage && <p>{errorMessage}</p>}
        {articles.length && !loading ? <NewsList articles={articles} /> : null}

        {showQueryModal && (
          <Modal onClose={this.closeSearchModal}>
            <div>
              <input name="query" value={query} onChange={this.changeValue} />
              <select
                name="hitsPerPage"
                value={hitsPerPage}
                onChange={this.changeValue}
              >
                {[10, 20, 30].map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
              <button onClick={this.refetchArticles}>Refetch articles</button>
            </div>
          </Modal>
        )}
      </Wrapper>
    );
  }
}
