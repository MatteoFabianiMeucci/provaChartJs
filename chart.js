const ctx = document.getElementById("myChart")

new Chart(ctx, {
    type : 'bar',
    data : {
        labels : ['red', 'blue', 'yellow'],
        datasets : [
            {label : '# of Votes', data : [10, 50, 32], borderwidth: 1}
        ]

    }
})