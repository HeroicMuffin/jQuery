$(function () {

    function getCapital(search, callback) {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/capital/${search}`,
            method: "GET",
            success: function (data) {
                callback(data)
            },
            error: function (err) {
                $("#capital-cards").html("<h1>No Match</h1>")
            }
        })
    }
    $("#countrySearch").on("click", () => {
        $(".cardContainer").html(`<div class="loader"></div>`)
        getCapital($("#defaultContactFormName").val(), (result) => {
            $("#cardContainer").html(drawCard(result))
        })

    })
})

function drawCard(array) {
    return array.reduce((stringChain, country) => {
        const { name, capital, flag } = country
        const temp = `<div id="cCard">
            <img src="${flag}" class="cardIMG">
                <div class="card-body">
                    <h4>${name}</h4>
                    <h5>${capital}</h5>
                </div>
            </div>`
        return stringChain += temp
    }, "")
}
