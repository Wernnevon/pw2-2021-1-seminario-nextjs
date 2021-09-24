import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    const data = json.data["Aatrox"];
    return data;
}

function Champion() {
    const { data, error } = useSWR('http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion/Aatrox.json', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data["name"]}!</div>
}

export default Champion;