import styles from '../styles/Tweets.module.css'
import Tweet from './tweet';

const reactHacksTweets = [
    { username: "ByteBender42", tweet: "Optimize your React app like a pro! 🚀 Use React.memo() to memoize components and boost performance. #ReactHacks #PerformanceBoost"    },
    { username: "CodeNinjaMatrix", tweet: "Unleash the power of && for sleek conditional rendering in React. Less code, more readability! #ReactHacks #JavaScript"    },
    { username: "StateSyncSorcerer", tweet: "Sync your React component state with external changes using useEffect and props. Level up your state game! #ReactHacks #Hooks"    },
    { username: "PropPioneer", tweet: "Destructure props directly in function parameters for cleaner and more readable React components. #ReactHacks #JavaScript"    },
    { username: "EventGhostHandler", tweet: "Ghost through unnecessary renders! 👻 Use arrow functions for event handlers with passed arguments. #ReactHacks #EventHandling"    },
    { username: "MemoMagicMaster", tweet: "Don't let expensive operations slow you down. 💸 Use useMemo for memoization in React and optimize performance. #ReactHacks #Performance"    },
    { username: "JSXJuggernaut", tweet: "Shrink your JSX! 📦 Replace <React.Fragment> with the shorthand <>...</> syntax for cleaner code. #ReactHacks #JSX"    },    
    { username: "ImperativeSorcerer", tweet: "Imperative actions made easy! 🎯 Use refs in React to interact directly with DOM elements or class components. #ReactHacks #Refs"    },    
    { username: "StyleSheetSorceress", tweet: "Craft visually stunning React components with styled-components. The power of CSS-in-JS at your fingertips! #ReactHacks #StyledComponents"    },    
    { username: "DynamicLoadDecker", tweet: "Deck your app with dynamic imports! 🚚 Use React.lazy() and Suspense for optimized code-splitting in React. #ReactHacks #CodeSplitting"    },    
    { username: "ImmutableMage", tweet: "Wield the power of immutability! 🚫 Use the spread operator for state updates in React and prevent unwanted side effects. #ReactHacks #Immutability"    },    
    { username: "RenderRogue", tweet: "Master the art of render props for flexible and reusable component logic in React. Level up your component game! #ReactHacks #Patterns"    },    
    { username: "ContextCrafter", tweet: "Weave a tapestry of state management with React Context. Say goodbye to prop drilling! #ReactHacks #ContextAPI"    },    
    { username: "ErrorBoundNinja", tweet: "Guard your app against errors! ⚠️ Use error boundaries in React to handle runtime errors gracefully. #ReactHacks #ErrorHandling"    },    
    { username: "HOCHacker", tweet: "HOCs, the secret sauce of React! 🔄 Use Higher-Order Components for composition and code reuse in your app. #ReactHacks #HOC"    },    
    { username: "CallbackCrafter", tweet: "Craft callbacks like a pro! 🧠 Use useCallback() in React to memoize functions and prevent unnecessary re-creations. #ReactHacks #Hooks"    },    
    { username: "ReduxRenegade", tweet: "Simplify Redux with hooks! 🔄 useSelector and useDispatch for a more ergonomic Redux experience in React. #ReactHacks #Redux"    },    
    { username: "DynamicContextCoder", tweet: "Dynamically consume multiple contexts in React with useContext. Your components will thank you! #ReactHacks #ContextAPI"    },    
    { username: "DebounceDynamo", tweet: "Dynamically debounce user input! 🕰️ Use lodash's debounce for improved performance in React search or filtering components. #ReactHacks #Debounce"    },
    { username: "PureOptimizationOverlord", tweet: "Rule your renders! 🌐 Extend PureComponent for automatic shallow comparison and optimize your React app. #ReactHacks #PerformanceOptimization"    }
];

export default function RandomUpdates() {
    const tweetsArray = reactHacksTweets.map((tweet, idx) => {
        return <Tweet username={tweet.username} tweet={tweet.tweet} key={idx} />
    });

    return (
        <div className={styles.tweetContainer}>
            <div className={styles.grid}>
            {tweetsArray}
            </div>
        </div>
    )
}