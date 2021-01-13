
$(function () {

    let employeeInfo = [];

    $('.submitInfo').on('click', function () {


        let newEmployee = {
            first: $('#firstNameIn').val(),
            last: $('#lastNameIn').val(),
            id: $('#idIn').val(),
            title: $('#titleIn').val(),
            salary: $('#annualSalaryIn').val(),
        }

        employeeInfo.push(newEmployee);//pushes new employees into the employeeInfo array

        //setting values to variables to use when appending to DOM
        let newFirstName = $('#firstNameIn').val()

        let newLastName = $('#lastNameIn').val()

        let newID = $('#idIn').val()

        let newTitle = $('#titleIn').val()

        let newAnnualSalary = $('#annualSalaryIn').val()

        let totalSalary = 0;
        for (let i = 0; i < employeeInfo.length; i++) {
            totalSalary += Number(employeeInfo[i].salary);
        }
        let totalMonthCost = totalSalary / 12;

        let el = $('#monthlyCost');

        el.empty();

        el.append(totalMonthCost);

        $('table').append('<tr><td class="firstName">' + newFirstName + '</td><td class="lastName">' + newLastName + '</td><td class="ID">' + newID + '</td><td class="title">' + newTitle + '</td><td class="annualSalary">' + newAnnualSalary + '</td><td class="deleteField"><button class="delButton">DELETE</button></td>')



        //clear input boxes for next input
        $('#firstNameIn').val('');

        $('#lastNameIn').val('');

        $('#idIn').val('');

        $('#titleIn').val('');

        $('#annualSalaryIn').val('');

        if (totalMonthCost > 20000) {
            $('#monthlyCost').css('background', 'red');
        }

        $('.delButton').on('click', function delButt() {

            $(this).closest('tr').remove();
        });

    });
});
