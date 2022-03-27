import Button from "../components/common/Button";


function Error({ statusCode }) {
    return (
        <div className="prose prose-neutral dark:prose-invert max-w-prose m-auto">
            <h1>
                Oups!
            </h1>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            <a href="/">
                Go back home
            </a>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error