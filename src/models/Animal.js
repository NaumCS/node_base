const {Sequelize, Model} = require('sequelize');
const bcryptjs = require('bcryptjs');

class Animal extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome deve ter entre 3 e 255 caracteres."
                    }
                }
            },        
            tutor: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: "Campo nome do tutor deve ter entre 3 e 255 caracteres."
                    }
                }
            },        
          
            breed: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        args: [3, 255],
                        msg: "Campo raça não pode ficar vazio"
                    }
                }
            },
            sex: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        args: [3, 255],
                        msg: "Campo sexo não pode ficar vazio"
                    }
                }
            },
    
            born_date: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo data de nascimento não pode ficar vazio',
                      },
                },
            },

        },{
            sequelize
        });

        return this;
    }

    // static associate(models){
    //     this.hasMany(models.Agendamento, { foreignKey: 'usuario_id' });
    // }
}
 


module.exports = Animal;
