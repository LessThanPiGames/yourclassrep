(() => {
  'use strict';

  const REP_CARDS = new Set([1, 2, 15, 16, 29, 30]);
  const CARD_RULES = {
    1: { influence:1, votes:2, ability:'Class Rep Ability', effect:'alwaysTie', text:'I always tie.' },
    2: { influence:1, votes:2, ability:'Class Rep Ability', effect:'alwaysTie', text:'I always tie.' },
    3: { influence:1, votes:2, ability:'Influential Ability', effect:'beatInfluence', targetInfluence:6, text:'When played against a card with 6 printed Influence, this card wins.' },
    4: { influence:1, votes:2, ability:'Influential Ability', effect:'beatInfluence', targetInfluence:6, text:'When played against a card with 6 printed Influence, this card wins.' },
    5: { influence:2, votes:1, ability:'Voter Ability', effect:'specialAtLeast', count:1, bonus:2, text:'If you have 1 or more face-up Special cards, gain +2 Votes.' },
    6: { influence:2, votes:1, ability:'Voter Ability', effect:'specialAtLeast', count:1, bonus:2, text:'If you have 1 or more face-up Special cards, gain +2 Votes.' },
    7: { influence:3, votes:0, ability:'Influential Ability', effect:'lowWins', text:'The card with the lowest Influence wins this matchup.' },
    8: { influence:3, votes:0, ability:'Influential Ability', effect:'lowWins', text:'The card with the lowest Influence wins this matchup.' },
    9: { influence:4, votes:1, ability:'Influential Ability', effect:'speakerInfluence', bonus:2, text:'When played against a Speaker, this card gets +2 Influence.' },
    10: { influence:4, votes:1, ability:'Influential Ability', effect:'speakerInfluence', bonus:2, text:'When played against a Speaker, this card gets +2 Influence.' },
    11: { influence:5, votes:1, ability:'Voter Ability', effect:'staffExactly', count:2, bonus:1, text:'If you have exactly 2 face-up Staff cards, gain +1 Vote.' },
    12: { influence:5, votes:1, ability:'Voter Ability', effect:'staffExactly', count:2, bonus:1, text:'If you have exactly 2 face-up Staff cards, gain +1 Vote.' },
    13: { influence:6, votes:0, ability:'Voter Ability', effect:'studentAtMost', count:2, bonus:1, text:'If you have 2 or fewer face-up Student cards, gain +1 Vote.' },
    14: { influence:6, votes:0, ability:'Voter Ability', effect:'studentAtMost', count:2, bonus:1, text:'If you have 2 or fewer face-up Student cards, gain +1 Vote.' },
    15: { influence:2, votes:0, ability:'Class Rep Ability', effect:'alwaysWin', text:'I always win.' },
    16: { influence:2, votes:0, ability:'Class Rep Ability', effect:'alwaysWin', text:'I always win.' },
    17: { influence:1, votes:2, ability:'Influential Ability', effect:'beatInfluence', targetInfluence:5, text:'When played against a card with 5 printed Influence, this card wins.' },
    18: { influence:1, votes:2, ability:'Influential Ability', effect:'beatInfluence', targetInfluence:5, text:'When played against a card with 5 printed Influence, this card wins.' },
    19: { influence:2, votes:2, ability:'Voter Ability', effect:'vsStaffVotes', bonus:1, text:'If this face-up card faced a Staff card in its Campaign matchup, gain +1 Vote.' },
    20: { influence:2, votes:2, ability:'Voter Ability', effect:'vsStaffVotes', bonus:1, text:'If this face-up card faced a Staff card in its Campaign matchup, gain +1 Vote.' },
    21: { influence:3, votes:1, ability:'Influential Ability', effect:'highVotesWins', text:'The card with the highest printed Votes wins this matchup.' },
    22: { influence:3, votes:1, ability:'Influential Ability', effect:'highVotesWins', text:'The card with the highest printed Votes wins this matchup.' },
    23: { influence:4, votes:1, ability:'Influential Ability', effect:'lowWins', text:'The card with the lowest Influence wins this matchup.' },
    24: { influence:4, votes:1, ability:'Influential Ability', effect:'lowWins', text:'The card with the lowest Influence wins this matchup.' },
    25: { influence:5, votes:1, ability:'Voter Ability', effect:'specialExactly', count:1, bonus:1, text:'If you have exactly 1 face-up Special card, gain +1 Vote.' },
    26: { influence:5, votes:1, ability:'Voter Ability', effect:'specialExactly', count:1, bonus:1, text:'If you have exactly 1 face-up Special card, gain +1 Vote.' },
    27: { influence:6, votes:0, ability:'Voter Ability', effect:'speakerExactly', count:1, bonus:1, text:'If you have exactly 1 face-up Speaker card, gain +1 Vote.' },
    28: { influence:6, votes:0, ability:'Voter Ability', effect:'speakerExactly', count:1, bonus:1, text:'If you have exactly 1 face-up Speaker card, gain +1 Vote.' },
    29: { influence:3, votes:2, ability:'Class Rep Ability', effect:'winVsStaff', text:'When played against a Staff card, this card always wins.' },
    30: { influence:3, votes:2, ability:'Class Rep Ability', effect:'winVsStaff', text:'When played against a Staff card, this card always wins.' },
    31: { influence:1, votes:2, ability:'Voter Ability', effect:'vsStaffVotes', bonus:2, text:'If this face-up card faced a Staff card in its Campaign matchup, gain +2 Votes.' },
    32: { influence:1, votes:2, ability:'Voter Ability', effect:'vsStaffVotes', bonus:2, text:'If this face-up card faced a Staff card in its Campaign matchup, gain +2 Votes.' },
    33: { influence:2, votes:0, ability:'Influential Ability', effect:'lowWins', text:'The card with the lowest Influence wins this matchup.' },
    34: { influence:2, votes:0, ability:'Influential Ability', effect:'lowWins', text:'The card with the lowest Influence wins this matchup.' },
    35: { influence:3, votes:1, ability:'Voter Ability', effect:'speakerRange', min:1, max:2, bonus:1, text:'If you have 1 or 2 face-up Speaker cards, gain +1 Vote.' },
    36: { influence:3, votes:1, ability:'Voter Ability', effect:'speakerRange', min:1, max:2, bonus:1, text:'If you have 1 or 2 face-up Speaker cards, gain +1 Vote.' },
    37: { influence:4, votes:2, ability:'Influential Ability', effect:'loseVsInfluence', targetInfluence:1, text:'When played against a card with 1 printed Influence, this card loses.' },
    38: { influence:4, votes:2, ability:'Influential Ability', effect:'loseVsInfluence', targetInfluence:1, text:'When played against a card with 1 printed Influence, this card loses.' },
    39: { influence:5, votes:1, ability:'Influential Ability', effect:'staffInfluence', bonus:1, text:'When played against a Staff card, this card gets +1 Influence.' },
    40: { influence:5, votes:1, ability:'Influential Ability', effect:'staffInfluence', bonus:1, text:'When played against a Staff card, this card gets +1 Influence.' },
    41: { influence:6, votes:-1, ability:'Voter Ability', effect:'specialExactly', count:2, bonus:3, text:'If you have exactly 2 face-up Special cards, gain +3 Votes.' },
    42: { influence:6, votes:-1, ability:'Voter Ability', effect:'specialExactly', count:2, bonus:3, text:'If you have exactly 2 face-up Special cards, gain +3 Votes.' }
  };
  const CATALOG = (window.CHARACTER_ENTRIES || []).map(entry => {
    const number = entry.number;
    const details = (window.CHARACTER_DETAILS || {})[number] || {};
    const rules = CARD_RULES[number];
    const isRep = REP_CARDS.has(number);
    const types = [...(details.types || [])];
    if (isRep) types.unshift('Class Rep');
    return {
      number,
      id:String(number).padStart(2, '0'),
      title:details.cardTitle || entry.name,
      name:details.characterName || entry.name,
      image:`images/Cards/${String(number).padStart(2, '0')}-${entry.code}.png`,
      art:`images/Characters/${String(number).padStart(2, '0')}-${entry.artCode}-Ch.png`,
      types,
      isRep,
      ...rules
    };
  });

  const stage = document.getElementById('game-stage');
  const allCards = new Map(CATALOG.map(card => [card.number, card]));
  const progressionKey = 'yourClassRepUnlockedDifficulty';
  const difficultyOrder = ['easy','medium','hard'];
  const poolSizes = {easy:14,medium:28,hard:42};
  let difficulty = 'easy';
  let gameMode = 'level';
  let state = null;

  function getHighestUnlockedDifficulty() {
    try {
      const saved = localStorage.getItem(progressionKey);
      return difficultyOrder.includes(saved) ? saved : 'easy';
    } catch (_) { return 'easy'; }
  }

  function saveHighestUnlockedDifficulty(level) {
    try { localStorage.setItem(progressionKey,level); } catch (_) {}
  }

  function shuffled(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [result[index],result[swap]] = [result[swap],result[index]];
    }
    return result;
  }

  function createRandomOpponentDeck(catalog, playerDeck) {
    const remaining = catalog.filter(card => !playerDeck.some(held => held.number === card.number));
    const representatives = shuffled(remaining.filter(card => card.isRep));
    const students = shuffled(remaining.filter(card => !card.isRep));
    if (!representatives.length || students.length < 6) return [];
    return shuffled([representatives[0],...students.slice(0,6)]);
  }

  function html(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char]);
  }

  function getCard(number) { return allCards.get(Number(number)); }
  function randomChoice(items) { return items[Math.floor(Math.random() * items.length)]; }
  function byNumbers(numbers) { return numbers.map(getCard).filter(Boolean); }
  function hasType(card, type) { return card.types.includes(type); }
  function labelTypes(card) { return card.types.join(' · '); }
  function cardImage(card) {
    return `<img src="${html(card.image)}" alt="Card ${card.id}: ${html(card.title)}" loading="lazy">`;
  }

  function chooseDraftCard(pool, roster, otherRoster, level) {
    let choices = pool.filter(card => !card.isRep || !roster.some(held => held.isRep));
    if (roster.length === 6 && !roster.some(card => card.isRep)) choices = choices.filter(card => card.isRep);
    const otherNeedsRep = !otherRoster.some(card => card.isRep);
    if (roster.some(card => card.isRep) && otherNeedsRep) choices = choices.filter(card => !card.isRep);
    if (!roster.some(card => card.isRep) && otherRoster.some(card => card.isRep)) choices = choices.filter(card => card.isRep);
    if (!choices.length) choices = pool.filter(card => !roster.some(held => held.number === card.number));
    if (level === 'easy') return randomChoice(choices);

    const scored = choices.map(card => {
      let score = card.influence * 0.48 + card.votes * 1.45;
      if (card.isRep) score += 5.5;
      if (['beatInfluence','alwaysWin','winVsStaff','highVotesWins','loseVsInfluence'].includes(card.effect)) score += 1.3;
      if (card.effect === 'lowWins') score += 1.15;
      if (['speakerInfluence','staffInfluence'].includes(card.effect)) score += 0.9;
      if (['specialAtLeast','specialExactly'].includes(card.effect)) score += roster.some(held => hasType(held, 'Special')) ? 2.2 : 1.2;
      if (card.effect === 'staffExactly' || card.effect === 'vsStaffVotes') score += roster.some(held => hasType(held, 'Staff')) ? 1.3 : 0.8;
      if (card.effect === 'studentAtMost') score += roster.some(held => hasType(held, 'Student')) ? 0.8 : 1.1;
      if (['speakerExactly','speakerRange'].includes(card.effect)) score += roster.some(held => hasType(held, 'Speaker')) ? 1.4 : 0.8;
      if (hasType(card, 'Special') && roster.some(held => ['specialAtLeast','specialExactly'].includes(held.effect))) score += 1.4;
      if (level === 'medium') score += Math.random() * 2.2;
      else score += Math.random() * 0.15;
      return { card, score };
    }).sort((a,b) => b.score - a.score);
    if (level === 'medium') return (scored.slice(0, Math.min(3, scored.length)))[Math.floor(Math.random() * Math.min(3, scored.length))].card;
    return scored[0].card;
  }

  function compareInfluence(a, b) {
    if (a > b) return 'player';
    if (b > a) return 'cpu';
    return 'tie';
  }

  function cardOutcome(card, other, ownInfluence, otherInfluence, side) {
    const opponent = side === 'player' ? 'cpu' : 'player';
    if (card.effect === 'alwaysTie') return 'tie';
    if (card.effect === 'alwaysWin') return side;
    if (card.effect === 'beatInfluence' && other.influence === card.targetInfluence) return side;
    if (card.effect === 'winVsStaff' && hasType(other, 'Staff')) return side;
    if (card.effect === 'loseVsInfluence' && other.influence === card.targetInfluence) return opponent;
    if (card.effect === 'lowWins') return ownInfluence < otherInfluence ? side : ownInfluence > otherInfluence ? opponent : 'tie';
    if (card.effect === 'highVotesWins' && card.votes > other.votes) return side;
    return null;
  }

  function resolveMatch(playerCard, cpuCard) {
    let playerInfluence = playerCard.influence;
    let cpuInfluence = cpuCard.influence;
    const notes = [];
    if (playerCard.effect === 'speakerInfluence' && hasType(cpuCard, 'Speaker')) {
      playerInfluence += playerCard.bonus;
      notes.push(`${playerCard.title} gains +${playerCard.bonus} Influence against a Speaker (${playerInfluence} total).`);
    }
    if (cpuCard.effect === 'speakerInfluence' && hasType(playerCard, 'Speaker')) {
      cpuInfluence += cpuCard.bonus;
      notes.push(`${cpuCard.title} gains +${cpuCard.bonus} Influence against a Speaker (${cpuInfluence} total).`);
    }
    if (playerCard.effect === 'staffInfluence' && hasType(cpuCard, 'Staff')) {
      playerInfluence += playerCard.bonus;
      notes.push(`${playerCard.title} gains +${playerCard.bonus} Influence against a Staff card (${playerInfluence} total).`);
    }
    if (cpuCard.effect === 'staffInfluence' && hasType(playerCard, 'Staff')) {
      cpuInfluence += cpuCard.bonus;
      notes.push(`${cpuCard.title} gains +${cpuCard.bonus} Influence against a Staff card (${cpuInfluence} total).`);
    }

    const printedResult = compareInfluence(playerCard.influence, cpuCard.influence);
    const modifiedResult = compareInfluence(playerInfluence, cpuInfluence);
    const intents = [];
    if (playerInfluence !== playerCard.influence && modifiedResult !== printedResult) {
      intents.push({ side:'player', card:playerCard, result:modifiedResult });
    }
    if (cpuInfluence !== cpuCard.influence && modifiedResult !== printedResult) {
      intents.push({ side:'cpu', card:cpuCard, result:modifiedResult });
    }

    const playerEffect = cardOutcome(playerCard, cpuCard, playerInfluence, cpuInfluence, 'player');
    if (playerEffect) intents.push({ side:'player', card:playerCard, result:playerEffect });
    const cpuEffect = cardOutcome(cpuCard, playerCard, cpuInfluence, playerInfluence, 'cpu');
    if (cpuEffect) intents.push({ side:'cpu', card:cpuCard, result:cpuEffect });

    let winner = modifiedResult;
    let unresolved = false;
    if (intents.length) {
      const distinctResults = new Set(intents.map(intent => intent.result));
      if (distinctResults.size === 1) {
        winner = intents[0].result;
      } else {
        let prioritized = [...intents];
        const playerRep = prioritized.some(intent => intent.side === 'player' && intent.card.isRep);
        const cpuRep = prioritized.some(intent => intent.side === 'cpu' && intent.card.isRep);
        if (playerRep !== cpuRep) prioritized = prioritized.filter(intent => intent.card.isRep);
        else {
          const playerPriority = Math.max(...prioritized.filter(intent => intent.side === 'player').map(intent => intent.card.influence), -1);
          const cpuPriority = Math.max(...prioritized.filter(intent => intent.side === 'cpu').map(intent => intent.card.influence), -1);
          if (playerPriority > cpuPriority) prioritized = prioritized.filter(intent => intent.side === 'player');
          else if (cpuPriority > playerPriority) prioritized = prioritized.filter(intent => intent.side === 'cpu');
          else unresolved = true;
        }
        const priorityResults = new Set(prioritized.map(intent => intent.result));
        if (priorityResults.size === 1) winner = prioritized[0].result;
        else unresolved = true;
        if (unresolved) {
          winner = 'tie';
          notes.push('Conflicting abilities had equal priority, so this matchup is unresolved. Both cards stay face-up.');
        } else if (playerRep !== cpuRep) {
          notes.push('The Class Rep Ability takes priority over the conflicting non-Class Rep Ability.');
        } else {
          notes.push('The higher-Influence card’s ability takes priority in this conflict.');
        }
      }
    }
    if (winner === 'tie' && !unresolved) notes.push('The matchup is tied. Both cards stay face-up.');
    else if (!unresolved) notes.push(`${winner === 'player' ? playerCard.title : cpuCard.title} wins the matchup; the losing card turns face-down.`);
    return { winner, unresolved, playerInfluence, cpuInfluence, notes };
  }

  function matchupUtility(candidate, opponent) {
    const result = resolveMatch(opponent, candidate).winner;
    if (result === 'cpu') return 1 + candidate.votes * 0.075;
    if (result === 'tie') return 0.38 + candidate.votes * 0.06;
    return 0;
  }

  function chooseCpuCampaignCard(level) {
    const cpuRemaining = state.cpuDeck.filter(card => !state.cpuUsed.includes(card.number));
    const playerRemaining = state.playerDeck.filter(card => !state.playerUsed.includes(card.number));
    if (level === 'easy') return randomChoice(cpuRemaining);
    const ranked = cpuRemaining.map(card => {
      let score = 0;
      if (playerRemaining.length) {
        for (const opponent of playerRemaining) score += matchupUtility(card, opponent);
        score /= playerRemaining.length;
      }
      score += card.votes * 0.035;
      if (level === 'medium') score += Math.random() * 0.6;
      return { card, score };
    }).sort((a,b) => b.score - a.score);
    if (level === 'medium') {
      const top = ranked.slice(0, Math.min(3, ranked.length));
      return randomChoice(top).card;
    }
    return ranked[0].card;
  }

  function renderDifficulty() {
    const maxUnlockedIndex = difficultyOrder.indexOf(getHighestUnlockedDifficulty());
    const modeLayout = `<div class="mode-choice-layout">
      <div class="difficulty-grid" role="group" aria-label="Choose computer difficulty">
        ${difficultyOrder.map((level,index) => {
          const label = level.toUpperCase();
          const isLocked = index > maxUnlockedIndex;
          const detail = isLocked ? `Unlock by completing ${difficultyOrder[index - 1][0].toUpperCase()}${difficultyOrder[index - 1].slice(1)}.` : 'Unlocked.';
          const character = level === 'easy' ? '11-PetF-Ch2.png' : level === 'medium' ? '11-PetF-Ch1.png' : '12-PetM-Ch.png';
          return `<button class="difficulty-button" type="button" data-difficulty="${level}" aria-pressed="${gameMode === 'level' && difficulty === level}" ${isLocked ? 'disabled' : ''}><span class="level-choice-copy"><strong>${label} · ${poolSizes[level]} CARDS</strong><span>Cards 01–${String(poolSizes[level]).padStart(2,'0')}. ${detail}</span></span><img class="mode-character level-character" src="images/Characters/${character}" alt="" aria-hidden="true"></button>`;
        }).join('')}
      </div>
      <button class="free-play-button" type="button" data-mode="free" aria-pressed="${gameMode === 'free'}"><img class="mode-character free-character" src="images/Characters/01-SpeechM-Ch.png" alt="" aria-hidden="true"><span class="free-choice-copy"><strong>FREE PLAY</strong><span>Build from your largest unlocked pool: ${poolSizes[difficultyOrder[maxUnlockedIndex]]} cards.</span></span><img class="mode-character free-character" src="images/Characters/02-SpeechF-Ch.png" alt="" aria-hidden="true"></button>
    </div>`;
    stage.innerHTML = `<div class="setup-panel">
      <span class="phase-kicker">SINGLE PLAYER · ${gameMode === 'free' ? 'FREE PLAY' : `${poolSizes[difficulty]} CARD POOL`}</span>
      <h2 class="mode-title"><img src="images/Assets/RedStar.png" alt="" aria-hidden="true">Choose how to play<img src="images/Assets/RedStar.png" alt="" aria-hidden="true"></h2>
      <p>Each Classroom has 7 cards and exactly one Class Rep. Complete a game at your current level to unlock the next card pool, win or lose. Free Play uses your largest unlocked pool.</p>
      ${modeLayout}
      <button class="action-button mode-start-button" id="start-game" type="button">${gameMode === 'free' ? 'BUILD YOUR CLASSROOM' : `START ${difficulty.toUpperCase()} GAME`}</button>
    </div>`;
    stage.querySelectorAll('[data-difficulty]').forEach(button => button.addEventListener('click', () => {
      difficulty = button.dataset.difficulty;
      gameMode = 'level';
      renderDifficulty();
    }));
    stage.querySelector('[data-mode="free"]').addEventListener('click', () => {
      gameMode = 'free';
      difficulty = getHighestUnlockedDifficulty();
      renderDifficulty();
    });
    stage.querySelector('#start-game').addEventListener('click', startSelectedMode);
  }

  function startSelectedMode() {
    if (gameMode === 'free') beginFreeBuild();
    else beginGame();
  }

  function beginGame() {
    const cardPool = CATALOG.slice(0, poolSizes[difficulty]);
    state = {
      phase:'draft',
      mode:'level',
      difficulty,
      catalog:cardPool,
      available:cardPool.map(card => card.number),
      playerDeck:[],
      cpuDeck:[],
      playerUsed:[],
      cpuUsed:[],
      playerFaceUp:[],
      cpuFaceUp:[],
      history:[],
      peekedCards:new Set(),
      keepLastVisible:false,
      round:1,
      busy:false,
      reviewDraftOpen:false,
      draftFilter:'All Cards'
    };
    renderDraft();
  }

  function beginFreeBuild() {
    difficulty = getHighestUnlockedDifficulty();
    const cardPool = CATALOG.slice(0,poolSizes[difficulty]);
    state = {
      phase:'draft',mode:'free',difficulty,catalog:cardPool,available:cardPool.map(card => card.number),
      playerDeck:[],cpuDeck:[],playerUsed:[],cpuUsed:[],playerFaceUp:[],cpuFaceUp:[],history:[],
      peekedCards:new Set(),keepLastVisible:false,round:1,busy:false,reviewDraftOpen:false,draftFilter:'All Cards'
    };
    renderDraft();
  }

  function canHumanChoose(card) {
    if (state.busy) return false;
    if (state.playerDeck.length >= 7) return false;
    if (state.playerDeck.some(held => held.isRep) && card.isRep) return false;
    if (state.playerDeck.length === 6 && !state.playerDeck.some(held => held.isRep) && !card.isRep) return false;
    return true;
  }

  function renderDraft() {
    if (!state || state.phase !== 'draft') return;
    const previousDraftScroll = stage.querySelector('.draft-scroll')?.scrollLeft || 0;
    const playerHasRep = state.playerDeck.some(card => card.isRep);
    const choices = state.catalog.map(card => {
      const visibleByFilter = state.draftFilter === 'All Cards' || hasType(card,state.draftFilter);
      const playerPicked = state.playerDeck.some(held => held.number === card.number);
      const cpuPicked = state.cpuDeck.some(held => held.number === card.number);
      const playable = canHumanChoose(card);
      const mustChooseRep = state.playerDeck.length === 6 && !playerHasRep;
      const classroomFull = state.playerDeck.length >= 7 && !playerPicked && !cpuPicked;
      const darkenRep = card.isRep && playerHasRep && !playerPicked && !cpuPicked;
      let status = '';
      if (playerPicked) status = 'YOUR PICK';
      else if (cpuPicked) status = 'COMPUTER PICK';
      else if (classroomFull) status = 'YOUR CLASSROOM IS FULL';
      else if (darkenRep) status = 'ONE CLASS REP MAX';
      else if (!playable && mustChooseRep) status = 'PICK A CLASS REP';
      else if (!playable && card.isRep) status = 'ONE CLASS REP MAX';
      const picked = playerPicked || cpuPicked;
      const preview = picked && !(state.mode === 'free' && playerPicked) ? `<img src="images/Cards/00-Cardback.png" alt="Card back">` : cardImage(card);
      const canRemoveFreePick = state.mode === 'free' && playerPicked;
      const ariaLabel = canRemoveFreePick ? `Remove card ${card.id}, ${card.title}, from your Classroom` : picked ? `${status}: card ${card.id}` : classroomFull ? `Unavailable: your Classroom already has 7 cards, card ${card.id}` : darkenRep ? `Unavailable: you already have a Class Rep, card ${card.id}` : `Choose card ${card.id}, ${card.title}`;
      return `<button class="draft-card ${picked ? 'picked' : ''} ${darkenRep ? 'unavailable-rep' : ''} ${classroomFull ? 'classroom-full' : ''}" type="button" data-pick-card="${card.number}" data-preview-src="${html(card.image)}" ${visibleByFilter ? '' : 'hidden'} ${canRemoveFreePick ? '' : picked ? 'aria-disabled="true"' : playable ? '' : 'disabled'} aria-label="${html(ariaLabel)}" title="${canRemoveFreePick ? 'CLICK TO REMOVE' : picked || darkenRep || classroomFull ? status : `#${card.id} ${html(card.title)}`}" >
        ${preview}<span class="draft-caption">${picked ? `<strong>${status}</strong>` : `<strong>#${card.id} ${html(card.title.toUpperCase())}</strong>`}</span>
      </button>`;
    }).join('');
    const done = state.mode === 'free' ? state.playerDeck.length === 7 : state.playerDeck.length === 7 && state.cpuDeck.length === 7;
    const draftReview = state.reviewDraftOpen ? `<div class="review-box"><strong>Computer’s current Classroom</strong><ul>${state.cpuDeck.map(card => `<li>#${card.id} ${html(card.title)} — ${card.influence} Influence, ${card.votes} Votes; ${html(card.text)}</li>`).join('') || '<li>No cards drafted yet.</li>'}</ul></div>` : '';
    const lastComputerPick = state.cpuDeck.at(-1);
    const pickNotice = state.busy
      ? 'The computer is choosing a card…'
      : state.mode === 'free'
        ? state.playerDeck.length === 7 ? 'Your Classroom is ready. Select a card you picked to remove it, or begin the Campaign.' : `Select ${7 - state.playerDeck.length} more card${state.playerDeck.length === 6 ? '' : 's'}; click a selected card to remove it. Include exactly one Class Rep.`
      : lastComputerPick
        ? `<strong>Computer picked: ${html(lastComputerPick.title)}</strong> · Influence: ${lastComputerPick.influence} · Votes: ${lastComputerPick.votes}<br><strong>Ability:</strong> ${html(lastComputerPick.text)}`
        : 'The computer has not picked a card yet.';
    const filterIconPaths = {
      'Class Rep':'images/Assets/GameIcons/Types/ClassRepIcon-Large.png',
      Special:'images/Assets/GameIcons/Types/SpecialIcon-Large.png',
      Student:'images/Assets/GameIcons/Types/StudentIcon-Large.png',
      Staff:'images/Assets/GameIcons/Types/StaffIcon-Large.png',
      Speaker:'images/Assets/GameIcons/Types/SpeakerIcon-Large.png'
    };
    stage.innerHTML = `<div class="game-header draft-header"><div><span class="phase-kicker">${state.mode === 'free' ? 'FREE BUILD' : 'SETUP'} · YOU ${state.playerDeck.length}/7 · COMPUTER ${state.cpuDeck.length}/7</span><h2>Build your Classroom</h2><p>${state.mode === 'free' ? `Choose 7 cards from the ${state.catalog.length}-card pool. Click cards to add or remove them; include exactly one Class Rep. Your hand stays visible, and the computer gets a random valid Classroom.` : 'Each player drafts 7 cards from the selected pool, and each Classroom needs exactly one Class Rep. The computer picks after you.'}</p></div>
      <div class="draft-toolbar"><button class="action-button secondary review-toggle" type="button" data-review-draft>${state.reviewDraftOpen ? 'HIDE COMPUTER PICKS' : 'REVIEW COMPUTER PICKS'}</button>${done ? '<button class="action-button" type="button" data-begin-campaign>BEGIN CAMPAIGN</button>' : ''}<button class="action-button secondary" type="button" data-new-game>NEW GAME</button></div></div>
      <p class="draft-notice" role="status">${pickNotice}</p>
      ${draftReview}<div class="draft-filters" role="group" aria-label="Filter cards by type">${['All Cards','Class Rep','Special','Student','Staff','Speaker'].map(type => { const iconPath = filterIconPaths[type]; return `<button class="draft-filter${state.draftFilter === type ? ' active' : ''}" type="button" data-draft-filter="${type}" aria-pressed="${state.draftFilter === type}">${iconPath ? `<img src="${iconPath}" alt="" aria-hidden="true">` : ''}<span>${type.toUpperCase()}</span></button>`; }).join('')}</div><div class="draft-scroll"><div class="draft-grid">${choices}</div></div>`;
    const newDraftScroll = stage.querySelector('.draft-scroll');
    if (newDraftScroll) newDraftScroll.scrollLeft = previousDraftScroll;
    stage.querySelector('[data-new-game]').addEventListener('click', confirmNewGame);
    stage.querySelector('[data-review-draft]').addEventListener('click', () => { state.reviewDraftOpen = !state.reviewDraftOpen; renderDraft(); });
    stage.querySelectorAll('[data-pick-card]').forEach(button => button.addEventListener('click', () => pickForPlayer(Number(button.dataset.pickCard))));
    stage.querySelectorAll('[data-draft-filter]').forEach(button => button.addEventListener('click', () => {
      state.draftFilter = button.dataset.draftFilter;
      stage.querySelectorAll('[data-draft-filter]').forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('active',active);
        filter.setAttribute('aria-pressed',String(active));
      });
      stage.querySelectorAll('[data-pick-card]').forEach(cardButton => {
        const card = getCard(cardButton.dataset.pickCard);
        cardButton.hidden = state.draftFilter !== 'All Cards' && !hasType(card,state.draftFilter);
      });
    }));
    stage.querySelector('[data-begin-campaign]')?.addEventListener('click', beginCampaign);
  }

  function pickForPlayer(number) {
    if (state.phase !== 'draft' || state.busy) return;
    const card = getCard(number);
    if (state.mode === 'free' && card) {
      const selectedIndex = state.playerDeck.findIndex(held => held.number === number);
      if (selectedIndex >= 0) {
        state.playerDeck.splice(selectedIndex,1);
        state.available.push(number);
        state.available.sort((a,b) => a - b);
        renderDraft();
        return;
      }
      if (!state.available.includes(number) || !canHumanChoose(card)) return;
      state.playerDeck.push(card);
      state.available = state.available.filter(id => id !== number);
      renderDraft();
      return;
    }
    if (!card || !state.available.includes(number) || !canHumanChoose(card)) return;
    state.playerDeck.push(card);
    state.available = state.available.filter(id => id !== number);
    state.busy = true;
    renderDraft();
    window.setTimeout(() => {
      if (!state || state.phase !== 'draft') return;
      const cpuCard = chooseDraftCard(byNumbers(state.available), state.cpuDeck, state.playerDeck, difficulty);
      if (cpuCard) {
        state.cpuDeck.push(cpuCard);
        state.available = state.available.filter(id => id !== cpuCard.number);
      }
      state.busy = false;
      renderDraft();
      if (state.playerDeck.length === 7 && state.cpuDeck.length === 7) scrollGameToTopOnMobile();
    }, 450);
  }

  function beginCampaign() {
    if (state.mode === 'free') {
      if (state.playerDeck.length !== 7) return;
      state.cpuDeck = createRandomOpponentDeck(state.catalog,state.playerDeck);
      if (state.cpuDeck.length !== 7) return;
    } else if (state.playerDeck.length !== 7 || state.cpuDeck.length !== 7) return;
    resetCampaignState();
    renderCampaign();
  }

  function resetCampaignState() {
    state.phase = 'campaign';
    state.playerUsed = [];
    state.cpuUsed = [];
    state.playerFaceUp = [];
    state.cpuFaceUp = [];
    state.history = [];
    state.peekedCards = new Set();
    state.keepLastVisible = false;
    state.round = 1;
    state.busy = false;
    state.reviewOpen = false;
  }

  function rematchGame() {
    if (!state || state.phase !== 'final') return;
    if (state.mode === 'free') {
      state.cpuDeck = createRandomOpponentDeck(state.catalog,state.playerDeck);
      if (state.cpuDeck.length !== 7) return;
    }
    resetCampaignState();
    renderCampaign();
  }

  function campaignBoard(tally = false) {
    const cells = (owner) => Array.from({length:6}, (_, index) => {
      const turn = state.history[index];
      const card = turn ? turn[owner] : null;
      const up = card && (owner === 'player' ? state.playerFaceUp : state.cpuFaceUp).includes(card.number);
      const latestTurn = !tally && index === state.history.length - 1 && state.keepLastVisible;
      const wonLatestTurn = turn?.winner === 'tie' || turn?.winner === (owner === 'player' ? 'player' : 'cpu');
      const heldForNextPick = latestTurn && wonLatestTurn;
      const lostLatestTurn = latestTurn && turn.winner !== 'tie' && !wonLatestTurn;
      const showLatestLoser = lostLatestTurn;
      const canPeek = owner === 'cpu' || tally || state.phase === 'campaign';
      const peeked = canPeek && state.peekedCards.has(card?.number);
      const revealed = up || heldForNextPick || showLatestLoser;
      const score = tally && up ? state.result[owner === 'player' ? 'playerScore' : 'cpuScore'] : null;
      const value = score ? score.cardVotes[card.number] ?? 0 : 0;
      const bonus = score ? score.cardBonuses[card.number] ?? 0 : 0;
      const pointLabel = score && bonus > 0 ? `${card.votes} + ${bonus} = ${value} VOTE${value === 1 ? '' : 'S'}` : `${value} VOTE${value === 1 ? '' : 'S'}`;
      let face = '<img src="images/Cards/00-Cardback.png" alt="Face-down card">';
      if (card && revealed) face = cardImage(card);
      else if (card && canPeek) face = `<button class="peek-card${peeked ? ' peeked' : ''}" type="button" data-peek-card="${card.number}" aria-label="Reveal previously played ${owner === 'cpu' ? 'computer' : 'your'} card ${card.id}" aria-pressed="${peeked}"><img class="card-back" src="images/Cards/00-Cardback.png" alt="Face-down card"><span class="peek-face">${cardImage(card)}</span><small>HOVER OR TAP TO PEEK</small></button>`;
      const stateLabel = (heldForNextPick || showLatestLoser) && !up ? 'ROUND REVEAL' : up ? 'FACE-UP' : 'FACE-DOWN';
      const activeTurn = !tally && index === state.history.length - 1 && state.keepLastVisible;
      return `<div class="match-column ${card ? '' : 'empty'}${lostLatestTurn ? ' loser' : ''}${activeTurn ? ' active-turn' : ''}" data-match-index="${index}" aria-label="Campaign matchup ${index + 1}">${card ? `<div class="match-slot ${up || heldForNextPick ? 'face-up' : 'face-down'}${lostLatestTurn ? ' loser' : ''}">${owner === 'cpu' && score ? `<strong class="card-points">${pointLabel}</strong>` : ''}${face}<small>${stateLabel}</small>${owner === 'player' && score ? `<strong class="card-points">${pointLabel}</strong>` : ''}</div>` : '<div class="match-slot blank">—</div>'}</div>`;
    }).join('');
    const cpuCells = cells('cpu');
    const playerCells = cells('player');
    const results = Array.from({length:6}, (_, index) => {
      const turn = state.history[index];
      const label = !turn ? '—' : turn.winner === 'tie' ? 'TIE' : turn.winner === 'player' ? 'YOU WIN' : 'CPU WINS';
      return `<div class="match-outcome">${label}</div>`;
    }).join('');
    const playerTotal = tally ? `<div class="row-total player-total">YOUR TOTAL: ${state.result.playerScore.votes} VOTES</div>` : '';
    const cpuTotal = tally ? `<div class="row-total cpu-total">COMPUTER TOTAL: ${state.result.cpuScore.votes} VOTES</div>` : '';
    const cpuLabel = tally ? cpuTotal : '<div class="board-side-label">COMPUTER</div>';
    const playerLabel = tally ? playerTotal : '<div class="board-side-label">YOU</div>';
    return `<div class="board-scroll"><div class="six-column-board">${cpuLabel}<div class="board-row cpu-row">${cpuCells}</div><div class="board-row outcome-row">${results}</div><div class="board-row player-row">${playerCells}</div>${playerLabel}</div></div>`;
  }

  function reviewLists() {
    const list = deck => `<ul>${deck.map(card => `<li>#${card.id} ${html(card.title)} — ${card.influence} Influence, ${card.votes} Votes</li>`).join('')}</ul>`;
    return `<div class="review-box"><div class="review-columns"><div><strong>Your Classroom</strong>${list(state.playerDeck)}</div><div><strong>Computer Classroom</strong>${list(state.cpuDeck)}</div></div></div>`;
  }

  function renderCampaign() {
    if (!state || state.phase !== 'campaign') return;
    const playerRemaining = state.playerDeck.filter(card => !state.playerUsed.includes(card.number));
    const pending = state.busy ? 'The computer is choosing…' : '';
    stage.innerHTML = `<div class="campaign-header"><h2>CAMPAIGN</h2><div class="campaign-toolbar">${state.round <= 6 ? `<button class="action-button secondary review-toggle" type="button" data-review>${state.reviewOpen ? 'HIDE CLASSROOMS' : 'REVIEW CLASSROOMS'}</button>` : '<button class="action-button" type="button" data-tally>GO TO TALLY</button>'}<button class="action-button secondary" type="button" data-new-game>NEW GAME</button></div></div>
      ${pending ? `<p class="play-prompt" role="status">${pending}</p>` : ''}
      ${campaignBoard()}
      ${state.round <= 6 ? `<div class="hand-scroll"><div class="hand-grid">${playerRemaining.map(card => `<button class="hand-card" type="button" data-play-card="${card.number}" ${state.busy ? 'disabled' : ''} aria-label="Play ${html(card.title)}, card ${card.id}">${cardImage(card)}</button>`).join('')}</div></div>` : ''}
      ${state.reviewOpen ? reviewLists() : ''}`;
    stage.querySelector('[data-new-game]').addEventListener('click', confirmNewGame);
    stage.querySelectorAll('[data-play-card]').forEach(button => button.addEventListener('click', () => { hidePreview(); playTurn(Number(button.dataset.playCard)); }));
    stage.querySelector('[data-review]')?.addEventListener('click', () => { state.reviewOpen = !state.reviewOpen; renderCampaign(); });
    stage.querySelector('[data-tally]')?.addEventListener('click', tallyVotes);
  }

  function playTurn(number) {
    if (state.phase !== 'campaign' || state.busy || state.round > 6 || state.playerUsed.includes(number)) return;
    const playerCard = getCard(number);
    const cpuCard = chooseCpuCampaignCard(difficulty);
    if (!playerCard || !cpuCard) return;
    state.busy = true;
    state.keepLastVisible = false;
    renderCampaign();
    window.setTimeout(() => {
      if (!state || state.phase !== 'campaign') return;
      const result = resolveMatch(playerCard, cpuCard);
      state.playerUsed.push(playerCard.number);
      state.cpuUsed.push(cpuCard.number);
      if (result.winner === 'player') state.playerFaceUp.push(playerCard.number);
      else if (result.winner === 'cpu') state.cpuFaceUp.push(cpuCard.number);
      else {
        state.playerFaceUp.push(playerCard.number);
        state.cpuFaceUp.push(cpuCard.number);
      }
      state.history.push({round:state.round, player:playerCard, cpu:cpuCard, ...result});
      state.keepLastVisible = true;
      state.round += 1;
      state.busy = false;
      renderCampaign();
      if (state.round > 6) scrollGameToTopOnMobile();
      else scrollToMobileBoard(state.history.length - 1);
    }, 650);
  }

  function calculateVotes(deck, faceUpIds, side = 'player') {
    const subject = side === 'cpu' ? 'they' : 'you';
    const faceUp = deck.filter(card => faceUpIds.includes(card.number));
    const cardVotes = Object.fromEntries(faceUp.map(card => [card.number, card.votes]));
    const cardBonuses = Object.fromEntries(faceUp.map(card => [card.number, 0]));
    const effects = [];
    const specialCount = faceUp.filter(card => hasType(card, 'Special')).length;
    const staffCount = faceUp.filter(card => hasType(card, 'Staff')).length;
    const studentCount = faceUp.filter(card => hasType(card, 'Student')).length;
    const speakerCount = faceUp.filter(card => hasType(card, 'Speaker')).length;
    for (const source of faceUp) {
      let active = false;
      let detail = '';
      if (source.effect === 'specialAtLeast' && specialCount >= source.count) {
        active = true;
        detail = `at least ${source.count} face-up Special card${source.count === 1 ? '' : 's'}`;
      } else if (source.effect === 'specialExactly' && specialCount === source.count) {
        active = true;
        detail = `exactly ${source.count} face-up Special cards`;
      } else if (source.effect === 'staffExactly' && staffCount === source.count) {
        active = true;
        detail = `exactly ${source.count} face-up Staff cards`;
      } else if (source.effect === 'studentAtMost' && studentCount <= source.count) {
        active = true;
        detail = `${source.count} or fewer face-up Student cards`;
      } else if (source.effect === 'speakerExactly' && speakerCount === source.count) {
        active = true;
        detail = `exactly ${source.count} face-up Speaker cards`;
      } else if (source.effect === 'speakerRange' && speakerCount >= source.min && speakerCount <= source.max) {
        active = true;
        detail = `${source.min} or ${source.max} face-up Speaker cards`;
      } else if (source.effect === 'vsStaffVotes') {
        const turn = state.history.find(item => (side === 'player' ? item.player : item.cpu).number === source.number);
        const faced = turn && (side === 'player' ? turn.cpu : turn.player);
        if (faced && hasType(faced, 'Staff')) {
          active = true;
          detail = 'its Campaign matchup was against a Staff card';
        }
      }
      if (active) {
        cardVotes[source.number] += source.bonus;
        cardBonuses[source.number] += source.bonus;
        effects.push(`${source.title}: ${source.bonus > 0 ? '+' : ''}${source.bonus} Vote${Math.abs(source.bonus) === 1 ? '' : 's'} (${subject} have ${detail}).`);
      }
    }
    const votes = Object.values(cardVotes).reduce((sum, value) => sum + value, 0);
    return {votes, cardVotes, cardBonuses, faceUp, effects, printedInfluence:faceUp.reduce((sum, card) => sum + card.influence, 0)};
  }

  function tallyVotes() {
    if (!state || state.phase !== 'campaign' || state.round <= 6) return;
    state.phase = 'final';
    const playerScore = calculateVotes(state.playerDeck,state.playerFaceUp,'player');
    const cpuScore = calculateVotes(state.cpuDeck,state.cpuFaceUp,'cpu');
    let winner = 'tie';
    let tiebreak = '';
    let influenceTiebreak = false;
    if (playerScore.votes > cpuScore.votes) winner = 'player';
    else if (cpuScore.votes > playerScore.votes) winner = 'cpu';
    else if (playerScore.faceUp.length > cpuScore.faceUp.length) { winner = 'player'; tiebreak = 'Votes tied, so more face-up cards broke the tie.'; }
    else if (cpuScore.faceUp.length > playerScore.faceUp.length) { winner = 'cpu'; tiebreak = 'Votes tied, so more face-up cards broke the tie.'; }
    else if (playerScore.printedInfluence > cpuScore.printedInfluence) { winner = 'player'; influenceTiebreak = true; tiebreak = 'Votes and face-up cards tied, so higher total printed Influence broke the tie.'; }
    else if (cpuScore.printedInfluence > playerScore.printedInfluence) { winner = 'cpu'; influenceTiebreak = true; tiebreak = 'Votes and face-up cards tied, so higher total printed Influence broke the tie.'; }
    else tiebreak = 'Votes, face-up cards, and total printed Influence tied. Both players win.';
    const unlockMessage = registerCompletedLevel();
    state.result = {winner,playerScore,cpuScore,tiebreak,influenceTiebreak,unlockMessage};
    renderFinal();
  }

  function registerCompletedLevel() {
    if (state.mode !== 'level') return '';
    const completedIndex = difficultyOrder.indexOf(state.difficulty);
    const unlockedIndex = difficultyOrder.indexOf(getHighestUnlockedDifficulty());
    if (completedIndex !== unlockedIndex || completedIndex >= difficultyOrder.length - 1) return '';
    const nextLevel = difficultyOrder[completedIndex + 1];
    saveHighestUnlockedDifficulty(nextLevel);
    return `${nextLevel.toUpperCase()} UNLOCKED · ${poolSizes[nextLevel]} CARDS`;
  }

  function renderFinal() {
    const {winner,playerScore,cpuScore,tiebreak,influenceTiebreak,unlockMessage} = state.result;
    const headline = winner === 'player' ? 'YOU WIN THE ELECTION!' : winner === 'cpu' ? 'THE COMPUTER WINS' : 'THE ELECTION IS A TIE';
    stage.innerHTML = `<div class="final-header"><span class="final-balance" aria-hidden="true"></span><h2 class="result-title"><img src="images/Assets/RedStar.png" alt="">${headline}<img src="images/Assets/RedStar.png" alt=""></h2><div class="final-actions"><button class="action-button secondary" type="button" data-rematch>REMATCH</button><a class="action-button" href="play-again.html">CONTINUE</a></div></div>
      ${unlockMessage ? `<p class="unlock-notice">${unlockMessage} · UNLOCKED WHETHER YOU WIN OR LOSE</p>` : ''}
      ${campaignBoard(true)}
      <p class="final-call">${winner === 'player' ? '“I AM YOUR CLASS REP!”' : winner === 'tie' ? 'BOTH PLAYERS WIN!' : 'RUN IT BACK FOR THE ELECTION!'}</p>
      ${tiebreak ? `<p class="turn-message">${html(tiebreak)}</p>` : ''}
      <div class="tally-abilities"><strong>VOTER ABILITIES</strong><ul>${[...playerScore.effects.map(effect => `You: ${effect}`), ...cpuScore.effects.map(effect => `Computer: ${effect}`)].map(effect => `<li>${html(effect)}</li>`).join('') || '<li>No Voter Abilities activated.</li>'}</ul></div>
      ${influenceTiebreak ? `<p class="tally-influence">Printed Influence tiebreak totals — You: ${playerScore.printedInfluence}; Computer: ${cpuScore.printedInfluence}</p>` : ''}`;
    stage.querySelector('[data-rematch]').addEventListener('click',rematchGame);
    window.setTimeout(() => scrollToMobileBoard(2, true), 80);
  }

  function scrollToMobileBoard(index, centerBoard = false) {
    if (!window.matchMedia('(max-width: 700px)').matches) return;
    const board = stage.querySelector('.six-column-board');
    const scroller = stage.querySelector('.board-scroll');
    if (!board || !scroller) return;
    const target = centerBoard ? board : stage.querySelector(`.cpu-row [data-match-index="${index}"]`);
    if (!target) return;
    if (centerBoard) {
      scroller.scrollTo({left:(scroller.scrollWidth - scroller.clientWidth) / 2, behavior:'smooth'});
    } else {
      const targetRect = target.getBoundingClientRect();
      const scrollRect = scroller.getBoundingClientRect();
      scroller.scrollTo({left:scroller.scrollLeft + targetRect.left - scrollRect.left - (scroller.clientWidth - targetRect.width) / 2, behavior:'smooth'});
    }
    const rect = board.getBoundingClientRect();
    window.scrollTo({top:window.scrollY + rect.top - (window.innerHeight - rect.height) / 2, behavior:'smooth'});
  }

  function scrollGameToTopOnMobile() {
    if (!window.matchMedia('(max-width: 700px)').matches) return;
    const stickyHeader = document.querySelector('.topbar');
    const topOffset = (stickyHeader?.getBoundingClientRect().height || 0) + 12;
    const top = window.scrollY + stage.getBoundingClientRect().top - topOffset;
    window.scrollTo({top:Math.max(0, top), behavior:'smooth'});
  }

  function resetGame() {
    state = null;
    renderDifficulty();
    stage.scrollIntoView({behavior:'smooth', block:'start'});
  }

  function confirmNewGame() {
    if (window.confirm('Start a new game? Your current game progress will be lost.')) resetGame();
  }

  const cardPreview = document.createElement('div');
  cardPreview.className = 'card-preview';
  cardPreview.setAttribute('aria-hidden', 'true');
  cardPreview.innerHTML = '<img alt="">';
  document.body.append(cardPreview);
  const previewImage = cardPreview.querySelector('img');
  let previewX = 0;
  let previewY = 0;
  previewImage.addEventListener('load', () => {
    if (cardPreview.classList.contains('visible')) positionPreview(previewX, previewY);
  });
  function previewCard(target, x, y) {
    if (!target || !stage.contains(target)) return;
    const face = target.matches('.peek-card') ? target.querySelector('.peek-face img') : target.matches('img') ? target : target.querySelector('.match-slot img,.hand-card img,.draft-card img');
    if (!face) return;
    previewImage.src = target.closest('.draft-card')?.dataset.previewSrc || face.src;
    previewImage.alt = face.alt || 'Card preview';
    cardPreview.classList.add('visible');
    positionPreview(x, y);
  }
  function positionPreview(x, y) {
    previewX = x;
    previewY = y;
    const margin = 14;
    const rect = cardPreview.getBoundingClientRect();
    cardPreview.style.left = `${Math.max(margin, Math.min(x - rect.width / 2, window.innerWidth - rect.width - margin))}px`;
    cardPreview.style.top = `${Math.max(margin, Math.min(y - rect.height / 2, window.innerHeight - rect.height - margin))}px`;
  }
  function hidePreview() { cardPreview.classList.remove('visible'); }

  stage.addEventListener('pointerover', event => {
    if (event.pointerType === 'touch') return;
    const card = event.target.closest('.peek-card,.match-slot img,.hand-card img,.draft-card img');
    if (card && !card.contains(event.relatedTarget)) previewCard(card, event.clientX, event.clientY);
  });
  stage.addEventListener('pointermove', event => {
    if (event.pointerType !== 'touch' && cardPreview.classList.contains('visible')) positionPreview(event.clientX, event.clientY);
  });
  stage.addEventListener('pointerout', event => {
    const card = event.target.closest('.peek-card,.match-slot img,.hand-card img,.draft-card img');
    if (card && !card.contains(event.relatedTarget)) hidePreview();
  });
  window.addEventListener('scroll', hidePreview, {passive:true});

  stage.addEventListener('click', event => {
    const target = event.target.closest('[data-peek-card]') || event.target.closest('.match-slot img');
    if (target?.hasAttribute('data-peek-card')) {
      const number = Number(target.dataset.peekCard);
      if (state?.peekedCards.has(number)) state.peekedCards.delete(number);
      else state?.peekedCards.add(number);
      target.classList.toggle('peeked', state?.peekedCards.has(number));
      target.setAttribute('aria-pressed', String(state?.peekedCards.has(number)));
      if (state?.peekedCards.has(number)) {
        const rect = target.getBoundingClientRect();
        previewCard(target, rect.left + rect.width / 2, rect.top + rect.height / 2);
      } else hidePreview();
    }
    if (target?.matches('.match-slot img')) {
      if (cardPreview.classList.contains('visible') && previewImage.src === target.src) hidePreview();
      else {
        const rect = target.getBoundingClientRect();
        previewCard(target, rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    }
  });
  renderDifficulty();
})();
