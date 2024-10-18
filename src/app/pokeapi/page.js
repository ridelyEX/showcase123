

export default async function PokeApi(){
    const dynamicData = await fetch ("https://pokeapi.co/api/v2/pokedex/{2}/",{cache: 'no-store'});
    return(
        <div>
            <h1> esto es una pokeapi ajaj</h1>
            <img src={dynamicData} alt="Pokeapi" />
        </div>
    
    )
}

