mapping(address => bool) public isFlagged;

function transfer(address recipient, uint256 amount) public returns (bool) {
    require(!isFlagged[msg.sender], "Sender address is flagged");
    return super.transfer(recipient, amount);
}
