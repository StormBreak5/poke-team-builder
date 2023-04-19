export default function RegionFilter(props: any) {
    const { handleRegion } = props

    return (
        <>
            <section >
                <nav >
                    <button onClick={() => handleRegion('')}>All regions</button>
                    <button onClick={() => handleRegion('kanto')}>Kanto</button>
                    <button onClick={() => handleRegion('johto')}>Johto</button>
                    <button onClick={() => handleRegion('hoenn')}>Hoenn</button>
                    <button onClick={() => handleRegion('sinnoh')}>Sinnoh</button>
                    <button onClick={() => handleRegion('unova')}>Unova</button>
                    <button onClick={() => handleRegion('kalos')}>Kalos</button>
                    <button onClick={() => handleRegion('alola')}>Alola</button>
                    <button onClick={() => handleRegion('galar')}>Galar</button>
                    <button onClick={() => handleRegion('no-region')}>No region</button>
                </nav>
            </section>
        </>
    )
}