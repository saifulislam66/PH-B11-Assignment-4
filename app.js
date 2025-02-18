function cashOut(money) {
  if (money < 0) {
    return "Invalid";
  }
  if (typeof money === "number") {
    let cashOutCharge = (money * 1.75) / 100;
    return cashOutCharge;
  } else {
    return "Invalid";
  }
}

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  let userEmail = email.split("");

  if (
    userEmail[0] == "+" ||
    userEmail[0] == "_" ||
    userEmail[0] == "-" ||
    userEmail[0] == "." ||
    userEmail[0] == "@"
  ) {
    return false;
  }

  let hello = userEmail.slice(userEmail.length - 4, userEmail.length);
  let comstig = hello.join("");
  if (comstig !== ".com") {
    return false;
  }

  if (userEmail.includes("@") && !userEmail.includes(" ")) {
    return true;
  } else {
    return false;
  }
}

function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  let mango = 0;
  let banana = 0;

  for (const vote of votes) {
    if (vote == "mango") {
      mango += 1;
    } else if (vote == "banana") {
      banana += 1;
    }
  }

  if (mango > banana) {
    return "Mango";
  } else if (mango == banana) {
    return "Draw";
  } else {
    return "Banana";
  }
}

function isBestFriend(f1, f2) {
  if (typeof f2 !== "object" || typeof f1 !== "object") {
    return "Invalid";
  }

  if (f1.bestFriend == f2.roll && f2.bestFriend == f1.roll) {
    return true;
  } else {
    return false;
  }
}

function calculateWatchTime(times) {
  let totalTime = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  for (const time of times) {
    totalTime += time;
    if (typeof time !== "number") {
      return "Invalid";
    }
  }

  hour = Math.floor(totalTime / 3600);
  minute = Math.floor((totalTime % 3600) / 60);
  second = totalTime % 60;
  const result = {
    hour: hour,
    minute: minute,
    second: second,
  };
  return result;
}
