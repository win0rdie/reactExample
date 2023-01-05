// import { Component } from "react";
// import { Controls } from "./Controls";
// import { Progress } from "./Progress";
// import { Publication } from "./Publications";

// const LS_KEY = "reader_item_index";

// export class Reader extends Component {
//   state = {
//     index: 0,
//   };

//   changeIndex = (value) => {
//     this.setState((state) => ({ index: state.index + value }));
//   };

//   componentDidMount() {
//     const savedState = localStorage.getItem(LS_KEY);
//     if (savedState) {
//       this.setState({ index: Number(savedState) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.index !== this.state.index) {
//       localStorage.setItem(LS_KEY, this.state.index);
//     }
//   }

//   render() {
//     const { index } = this.state;
//     const { items } = this.props;
//     const totalItems = items.length;
//     const currentItem = items[index];

//     return (
//       <div>
//         <Controls
//           current={index + 1}
//           total={totalItems}
//           onChange={this.changeIndex}
//         />
//         <Progress current={index + 1} total={totalItems} />
//         <Publication item={currentItem} />
//       </div>
//     );
//   }
// }
import { Component } from "react";
import { Controls } from "./Controls";
import { Progress } from "./Progress";
import { Publication } from "./Publications";

const LS_KEY = "reader_item_index";

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };

  componentDidMount() {
    const savedIndex = localStorage.getItem(LS_KEY);
    if (savedIndex) {
      this.setState({ publicationIndex: Number(savedIndex) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const totalItems = items.length;

    const currentItem = items[publicationIndex];

    return (
      <div>
        <Controls
          currentItem={publicationIndex + 1}
          totalItems={totalItems}
          onChange={this.changeIndex}
        />
        <Progress currentPage={publicationIndex + 1} totalPage={totalItems} />
        <Publication item={currentItem} />
      </div>
    );
  }
}
