import Head from "next/head";

const Meta = ({description="",keywords="",title=""}) => {
    return (
        <>
            <Head>
                {/* <link rel='icon' href='/favicon (1).ico'/> */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content={process.env.NEXT_PUBLIC_BRAND_NAME} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={process.env.NEXT_PUBLIC_BRAND_LOGO} />
                <meta property="og:url" content="Your URL here" />
                <meta property="og:type" content="website" />
            </Head>
        </>
    );
}

export default Meta;
