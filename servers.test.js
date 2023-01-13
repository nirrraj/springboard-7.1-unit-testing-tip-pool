describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table', function(){
    submitServerInfo();
    updateServerTable();

    let currentRows = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentRows.length).toEqual(3);
    expect(currentRows[0].innerText).toEqual('Alice');
  });

  it('should add a delete button for new server table row', function(){
    submitServerInfo();
    updateServerTable();

    let currentRows = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentRows[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = "";
  });
});
