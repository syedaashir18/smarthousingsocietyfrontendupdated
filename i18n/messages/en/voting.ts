const voting = {
  header: {
    societyName: "Green Valley Society",
    societyLocation: "Gulshan-e-Iqbal, Karachi",
    liveBadge: "VOTING LIVE",
    title: "Society Committee Election 2025",
    subtitle: "Apna vote dain — apni community ka future apke haath mein hai",
    electionDate: "Election Date",
    totalVotes: "Total Votes Cast",
    eligible: "Eligible Voters",
    registeredMembers: "Registered Society Members",
    resultsNotice: "Results will be announced after voting closes"
  },
  stats: {
    totalVotes: "Total Votes",
    candidates: "Candidates",
    leading: "Leading",
    topPct: "Top Candidate %"
  },
  tabs: {
    voteNow: "Vote Now",
    liveResults: "Live Results",
    rules: "Rules"
  },
  voteTab: {
    chooseCandidate: "Choose Your Candidate",
    youChose: "Aap ne chunaa:",
    verificationTitle: "Voter Verification",
    fullNameLabel: "Aapka Poora Naam *",
    fullNamePlaceholder: "e.g. Muhammad Ali Khan",
    cnicLabel: "CNIC Number *",
    cnicPlaceholder: "XXXXX-XXXXXXX-X",
    cnicHint: "Format: 42201-1234567-8 (Pakistani CNIC)",
    blockLabel: "Block / Flat Number",
    blockPlaceholder: "e.g. Block C, Flat 401",
    phoneLabel: "Mobile Number (Optional)",
    phonePlaceholder: "03XX-XXXXXXX",
    submitBtn: "APNA VOTE DAIN",
    errorSelectCandidate: "Pehle kisi candidate ko select karein!",
    errorName: "Apna poora naam likhein (kam az kam 3 haroof).",
    errorNic: "Valid Pakistani CNIC number likhein. Format: XXXXX-XXXXXXX-X",
    errorAlreadyVotedTitle: "Pehle Se Vote Ho Chuka Hai!",
    errorAlreadyVotedDesc: "Is CNIC ({nic}) se vote pehle hi darj ho chuka hai. Har voter sirf ek baar vote de sakta hai.",
    successTitle: "Vote Kaamiyabi Se Darj!",
    successDesc: "Aapka vote {name} ke liye successfully record ho gaya hai. Shukriya!"
  },
  resultsTab: {
    title: "Live Vote Count",
    refresh: "Refresh",
    noVotes: "Abhi koi vote nahi aya. Voting shuru karein!",
    recentActivity: "Recent Activity",
    noActivity: "Abhi koi activity nahi hui.",
    activityLog: "{name} ne {candidate} ko vote diya",
    votesLabel: "votes"
  },
  rulesTab: {
    title: "Election Guidelines",
    committeeTitle: "Election Committee Members",
    rules: {
      cnic: { title: "CNIC Lazim Hai", desc: "Har voter ko apna valid Pakistani CNIC number dena hoga. Ek CNIC se sirf ek baar vote diya ja sakta hai." },
      name: { title: "Naam Zaroori Hai", desc: "Voter ka poora naam dena lazim hai. Yeh record mein save hoga aur audit ke liye use hoga." },
      society: { title: "Society Member", desc: "Sirf Green Valley Society ke registered residents vote de sakte hain. Bahar ke log eligible nahi hain." },
      singleVote: { title: "Sirf Ek Vote", desc: "Ek voter sirf ek candidate ko vote de sakta hai. Dobara vote dene ki koshish system rokta hai." },
      liveResults: { title: "Shuafaf Nataij", desc: "Live Results tab mein har candidate ke votes real time mein dekhe ja sakte hain. Koi cheez chupayi nahi jati." },
      winner: { title: "Jeet ka Faisla", desc: "Sab se zyada votes hasil karne wala candidate Green Valley Society Committee ka Chairman bane ga." }
    },
    members: {
      presidingOfficer: "Presiding Officer",
      secretary: "Secretary",
      observer: "Observer",
      sysAdmin: "System Admin"
    }
  },
  footer: {
    title: "Green Valley Society Digital Voting System",
    location: "Gulshan-e-Iqbal, Karachi",
    notice: "Sab votes encrypted aur secure hain. Yeh data sirf election committee ke paas hai."
  },
  common: {
    okButton: "Theek Hai",
    emptyDash: "—"
  }
};

export default voting;
