let border = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

var turn = "X";
var count = 0;
var end_game = false;
var winner = null;

var game_div = document.querySelector(".game");
var show_win = document.querySelector(".winner_div");
var h2 = document.querySelector("#winner");

var who_win = document.querySelector("#who_win");

function putValue(val) {
  var d = document.getElementById(val + 1);
  let valid_check = handle_turn(val);
  let check_win = checkif_game_over();
  if (end_game) {
    if (winner == "X" || winner == "O") {
      display_winner();
    }
  } else if (count > 8) {
    winner = null;
    display_winner();
  }

  if (valid_check) {
    if (turn == "O") {
      d.innerHTML = "<span class='x'></span>";
    } else {
      d.innerHTML = "<span class='o'></span>";
    }
  }
}

function handle_turn(value) {
  if (border[value] != "-") {
    return false;
  } else {
    border[value] = turn;
    count++;
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    return true;
  }
}

function checkif_game_over() {
  return checkif_win();
}

function checkif_win() {
  //rows
  let row = check_rows();
  //columns
  let column = check_column();
  //dignoal
  let dignoal = check_dig();
  console.log(dignoal);
  if (row) {
    winner = row;
  } else if (column) {
    winner = column;
  } else if (dignoal) {
    winner = dignoal;
  }
  return;
}

//check for rows
function check_rows() {
  var rows_1 =
    border[0] != "-" &&
    border[1] &&
    border[2] &&
    border[0] == border[1] &&
    border[1] == border[2];

  var rows_2 =
    border[3] != "-" &&
    border[4] &&
    border[5] &&
    border[3] == border[4] &&
    border[4] == border[5];

  var rows_3 =
    border[6] != "-" &&
    border[7] &&
    border[8] &&
    border[6] == border[7] &&
    border[7] == border[8];

  if (rows_1 || rows_2 || rows_3) {
    end_game = true;
  }
  if (rows_1) {
    return border[0];
  } else if (rows_2) {
    return border[3];
  } else if (rows_3) {
    return border[6];
  }
  return;
}

//CHeck for column
function check_column() {
  var col_1 =
    border[0] != "-" &&
    border[3] &&
    border[6] &&
    border[0] == border[3] &&
    border[3] == border[6];

  var col_2 =
    border[1] != "-" &&
    border[4] &&
    border[7] &&
    border[1] == border[4] &&
    border[4] == border[7];

  var col_3 =
    border[2] != "-" &&
    border[5] &&
    border[8] &&
    border[2] == border[5] &&
    border[5] == border[8];

  if (col_1 || col_2 || col_3) {
    end_game = true;
  }

  if (col_1) {
    return border[0];
  } else if (col_2) {
    return border[1];
  } else if (col_3) {
    return border[2];
  }
  return;
}

//check for dignoal
function check_dig() {
  var dig_1 =
    border[0] != "-" &&
    border[4] &&
    border[8] &&
    border[0] == border[4] &&
    border[4] == border[8];

  var dig_2 =
    border[2] != "-" &&
    border[4] != "-" &&
    border[6] != "-" &&
    border[2] == border[4] &&
    border[4] == border[6];

  if (dig_1 || dig_2) {
    end_game = true;
  }

  if (dig_1) {
    return border[0];
  } else if (dig_2) {
    return border[2];
  }
  return;
}

function display_winner() {
  game_div.style.display = "none";
  show_win.style.display = "block";
  if (winner == null) {
    h2.innerHTML = "DRAW";
  } else {
    h2.innerHTML = "WINNER !";
  }
  if (winner == "X") {
    who_win.innerHTML = "<span class='x'></span>";
  } else if (winner == "O") {
    who_win.innerHTML = "<span class='o'></span>";
  } else {
    who_win.innerHTML = "Tie";
  }
}