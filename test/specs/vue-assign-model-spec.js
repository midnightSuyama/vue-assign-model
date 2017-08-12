module.exports = {
  'form': browser => {
    browser
      .url('http://localhost:8080/test/fixtures/form.html')
      .waitForElementVisible('#app', 1000)
      .assert.value('#text', 'edit me')
      .assert.value('#textarea', 'add multiple lines')
      .assert.elementPresent('#checkbox:checked')
      .assert.elementNotPresent('#jack:checked')
      .assert.elementNotPresent('#john:checked')
      .assert.elementPresent('#mike:checked')
      .assert.elementNotPresent('#one:checked')
      .assert.elementPresent('#two:checked')
      .assert.value('#select', 'C')
      .assert.elementNotPresent('#select-multiple > option[value=A]:checked')
      .assert.elementPresent('#select-multiple > option[value=B]:checked')
      .assert.elementPresent('#select-multiple > option[value=C]:checked')
      .assert.containsText('#items > li:nth-child(1)', 'Foo')
      .assert.containsText('#items > li:nth-child(2)', 'Bar')
      .execute(function(){
        vm.text             = 'updated text'
        vm.textarea         = 'updated textarea'
        vm.checked          = false
        vm.checkedNames     = ['Jack']
        vm.picked           = 'One'
        vm.selected         = 'A'
        vm.selectedMultiple = ['A']
        vm.items.shift()
      })
      .assert.value('#text', 'updated text')
      .assert.value('#textarea', 'updated textarea')
      .assert.elementNotPresent('#checkbox:checked')
      .assert.elementPresent('#jack:checked')
      .assert.elementNotPresent('#john:checked')
      .assert.elementNotPresent('#mike:checked')
      .assert.elementPresent('#one:checked')
      .assert.elementNotPresent('#two:checked')
      .assert.value('#select', 'A')
      .assert.elementPresent('#select-multiple > option[value=A]:checked')
      .assert.elementNotPresent('#select-multiple > option[value=B]:checked')
      .assert.elementNotPresent('#select-multiple > option[value=C]:checked')
      .assert.containsText('#items > li:nth-child(1)', 'Bar')
      .end()
  }
}
