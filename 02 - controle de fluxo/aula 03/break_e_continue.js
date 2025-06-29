const scores = [10, 32, 78, 100, 50, 1]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue
  }

  console.log(`sua pontuação: ${scores[i]}`)

  if (scores[i] === 100) {
    console.log('parabens voce atingiu a pontuação maxima')
    break
  }
}